import btn from "../icons/update.png";

export default function UpdateNodeBox({ fun }) {
  const upClick = (ev) => {
    ev.preventDefault();
    fun();
  };
  return (
    <>
      <div className="main_box">
        <h1 className="main_title">Notes</h1>
        <button type="button" className="main_update_btn" onClick={upClick}>
          <img src={btn} className="main_update_img" />
        </button>
      </div>
    </>
  );
}
