import { Vue } from "vue-property-decorator";

export default class baseClass extends Vue {
  private msg = "Hello to Vue Ts";
  functionName() {
    let name = prompt("Enter Name:");
    // alert(name);
    console.info(name);
  }
}
