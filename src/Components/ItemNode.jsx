import redKrest from "../icons/close_red.png";

export default function ItemNode({ cont }) {
  return (
    <>
      <div className="item_note">
        <div className="box_close">
          <img src={redKrest} className="box_close_img" />
        </div>
        <div className="box_text">{cont.content}</div>
      </div>
    </>
  );
}
