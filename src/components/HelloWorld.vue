<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    試作その1
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
        <textarea readonly v-model="logMessages"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { coreCube } from "../libs/CoreCube.js";

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
  },
  created: function () {
    console.log("Hello World!");
    console.log("This is a test program!");
    this.logMessages = "";
    this.cube = new coreCube({name: "cube1", logger: this.debugLog});
  },
  beforeUnmount: async function () {
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
