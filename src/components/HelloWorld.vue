<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    試作その2
    <p>
      Vue + web bluetooth による
      <br />
      toio &trade; core cube 制御サンプルプログラム<br />
    </p>
    <h3>toio &trade; core cube と接続</h3>
    <br />
    <div v-if="cube.isConnected()">
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
      orientation: {
        alpha: NaN,
        beta: NaN,
        gamma: NaN,
      },
      speed: 0,
      motorR: 0,
      motorL: 0,
      logMessages: "",
    }
  },
  computed: {
    cubeIsReady: function () {
      return this.ready;
    },
    getLog: function () {
      return this.logMessages;
    },
    getAbsolute: function () {
      return this.orientation.absolute;
    },
    getAlpha: function () {
      return this.orientation.alpha;
    },
    getBeta: function () {
      return this.orientation.beta;
    },
    getGamma: function () {
      return this.orientation.gamma;
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
      window.addEventListener("deviceorientation", this.orientationHandler, false);
    } else {
      this.logMessages("ERROR:DeviceOrientation is not supported");
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
    debugLog: function (msg) {
      console.log(msg);
      let logData;
      if (typeof(msg) === "string") {
        logData = msg;
      } else {
        logData = JSON.stringify(msg, null, 2);
      }
      this.logMessages += "\n" + logData;
    },
    disconnectHandler: async function () {
      console.log("disconnect");
      this.ready = false;
    },
    connectToCube: async function () {
      this.debugLog("connect to ble device");
      if (!this.cube.isConnected()) {
        await this.cube.connectDevice(this.disconnectHandler);
        if (!this.cube.isConnected()) {
          console.log("Error:failed to conenct");
          return;
        }
        this.debugLog("add handler");
        await this.cube.addHandler("motion", this.motionHandler);
        this.debugLog("lamp on");
        await this.cube.setLamp(0x00, 0x60, 0x00);
        this.debugLog("success to connect");
        this.ready = true;
      }
    },
    disconnectWithCube: async function () {
      if (this.cube.isConnected()) {
        await this.cube.setLamp(0, 0, 0);
        await this.cube.disconnectDevice(true);
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
