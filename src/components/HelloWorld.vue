<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    試作その10
    <p>
      Vue + web bluetooth による
      <br />
      toio &trade; core cube 制御サンプルプログラム<br />
    </p>
    <div v-if="appleDevice">
      <h3>Apple社製デバイスをお使いの方へ</h3>
      <br />
      Apple社製のデバイスで動作させるには、WebBLE（有料アプリ）が必要です
      <br />
      また、ユーザーによる位置情報利用の許可が必要になります
      <br />
      下記ボタンを押して位置情報を許可してください
      <br />
      <br />
      <br />
      <button v-on:click="reqestPermissionOnAppleDeVice">位置情報利用を許可してください</button>
      <br />
    </div>
    <h3>toio &trade; core cube と接続</h3>
    <br />
    <div v-if="isConnecting">
      <button v-on:click="disconnectWithCube">せ つ だ ん</button>
      <div v-if="cubeIsReady">
        <br />
        <br />
        スマホをかたむけるとキューブが動きます
      </div>
      <div v-else>
        <br />
        <br />
        【接続中】キューブのランプが光るまでおまちください
      </div>
    </div>
    <div v-else>
      <button v-on:click="connectToCube">せ つ ぞ く</button>
    </div>
    <div v-if="debugMode">
      <h3>デバッグ情報</h3>
      <div>
        <br />
        alpha: {{ getAlpha }} <br />
        beta: {{ getBeta }} <br />
        gamma: {{ getGamma }} <br />
        <br />
        motorL: {{ motorL }}
        motorR: {{ motorR }}
        <br />
        <br />
      </div>
      <div>
        <textarea readonly v-model="logMessages"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { coreCube } from "../libs/CoreCube.js";

function roundToEven(n) {
  var r = (0 < n) ? n % 2 : (n % 2) + 2;
  return (1 < r) ?  Math.floor(n + 0.5) : Math.ceil(n - 0.5);
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    debugMode: Boolean,
  },
  data: function () {
    return {
      cube: null,
      ready: false,
      connecting: false,
      orientation: {
        alpha: 0.0,
        beta: 0.0,
        gamma: 0.0,
      },
      speed: 0,
      motorR: 0,
      motorL: 0,
      logMessages: "",
      appleDevice: false,
    }
  },
  computed: {
    cubeIsReady: function () {
      return this.ready;
    },
    getLog: function () {
      return this.logMessages;
    },
    isConnecting: function() {
      return this.connecting;
    },
    getAlpha: function () {
      if (typeof(this.orientation.alpha) === "number") {
        return this.orientation.alpha.toFixed(3);
      } else {
        return 0.000;
      }
    },
    getBeta: function () {
      if (typeof(this.orientation.beta) === "number") {
        return this.orientation.beta.toFixed(3);
      } else {
        return 0.000;
      }
    },
    getGamma: function () {
      if (typeof(this.orientation.gamma) === "number") {
        return this.orientation.gamma.toFixed(3);
      } else {
        return 0.000;
      }
    },
  },
  created: function () {
    console.log("Hello World!");
    console.log("This is a test program!");
    this.logMessages = "";
    this.cube = new coreCube({name: "cube1", logger: this.debugLog});
  },
  mounted: function () {
    if (window.DeviceOrientationEvent) {
      console.log("DeviceOrientation is supported");
      if(DeviceOrientationEvent.requestPermission) {
        this.appleDevice = true;
        this.debugLog("*** Apple Device");
      } else {
        this.debugLog("*** Normal Device");
        window.addEventListener("deviceorientation", this.orientationHandler, false);
      }
    } else {
      this.debugLog("ERROR:DeviceOrientation is not supported");
    }
  },
  beforeUnmount: async function () {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.orientationHandler, false);
    }
    if (this.cube.isConnected()) {
      console.log("force to disconnect with cube");
      await this.cube.disconnectDevice(true);
    }
    console.log("Bye!");
  },
  methods: {
    debugLog: function (...msg) {
      console.log(...msg);
      let logData = "";
      for (let arg of msg) {
        if (typeof(arg) === "object") {
          logData += JSON.stringify(arg, null, 2);
          logData += "\n"
        } else {
          logData += arg.toString();
        }
      }
      this.logMessages += "\n" + logData;
    },
    reqestPermissionOnAppleDeVice: function () {
      DeviceOrientationEvent.requestPermission().then(function(response){
        if(response === "granted"){
          console.log("granted");
        }
      }).catch(function(e) {
        console.log(e);
      });
      window.addEventListener("deviceorientation", this.orientationHandler, false);
    },
    disconnectHandler: async function () {
      console.log("disconnect");
      this.ready = false;
    },
    connectToCube: async function () {
      this.debugLog("connect to ble device");
      this.ready = false;
      this.connecting = true;
      if (!this.cube.isConnected()) {
        let cubeResult = await this.cube.connectDevice(this.disconnectHandler);
        if (!cubeResult) {
          console.log("Error:connection failed: 1");
          this.connecting = false;
          return;
        }
        if (!this.cube.isConnected()) {
          console.log("Error:connection failed: 2");
          this.connecting = false;
          return;
        }
        this.debugLog("add handler");
        cubeResult = await this.cube.addHandler("motion", this.motionHandler);
        if (!cubeResult) {
          this.connecting = false;
          return;
        }
        this.debugLog("lamp on");
        cubeResult = await this.cube.setLamp(0x00, 0x60, 0x00);
        if (!cubeResult) {
          this.connecting = false;
          return;
        }
        this.debugLog("success to connect");
        this.ready = true;
      }
    },
    disconnectWithCube: async function () {
      if (this.cube.isConnected()) {
        await this.cube.setMotor(0, 0);
        await this.cube.setLamp(0, 0, 0);
        await this.cube.disconnectDevice(true);
        this.connecting = false;
        this.ready = false;
      }
      console.log("disconnect with", this.cube.name)
    },
    orientationHandler: function (event) {
      this.orientation.alpha = event.alpha;
      this.orientation.beta = event.beta;
      this.orientation.gamma = event.gamma;

      if (this.orientation.beta > 5) {
        this.speed = (this.orientation.beta - 5) * -3;
      } else if (this.orientation.beta < -5) {
        this.speed = (this.orientation.beta + 5) * -3;
      } else {
        this.speed = 0;
      }

      if (this.orientation.gamma > 5) {
        // right turn
        let limitGamma = Math.min((this.orientation.gamma - 5), 50);
        this.motorR = roundToEven(this.speed * (1 - (limitGamma / 25)));
        this.motorL = roundToEven(this.speed);
      } else if (this.orientation.gamma < -5) {
        // left turn
        let limitGamma = Math.max((this.orientation.gamma + 5), -50);
        this.motorR = roundToEven(this.speed);
        this.motorL = roundToEven(this.speed * (1 + (limitGamma / 25)));
      } else {
        this.motorR = roundToEven(this.speed);
        this.motorL = roundToEven(this.speed);
      }
      if (this.ready) {
        this.debugLog("motor:", this.motorL, this.motorR);
        this.cube.setMotor(this.motorL, this.motorR);
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
textarea {
  width: 80%;
  height: 15em;
}
</style>
