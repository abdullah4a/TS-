import { Vue } from "vue-property-decorator";

export default class baseClass extends Vue {
  private msg = "Hello to Vue Ts";
  private Name = "";
  functionName(): string {
    this.Name = "";
    // alert(name);
    return this.Name;
  }
}
