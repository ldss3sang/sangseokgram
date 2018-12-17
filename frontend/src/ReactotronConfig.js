import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

Reactotron.configure({ name: "Sangseokgram" }).use(reactotronRedux()).connect();

export default Reactotron;