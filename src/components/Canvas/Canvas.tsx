import { DrawRectangle } from "./script";
import "./styles.css";

const Canvas = () => {
    window.onload = () => DrawRectangle();
    return <div className="canvas"></div>;
};
export default Canvas;
