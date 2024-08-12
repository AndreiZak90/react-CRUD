import redKrest from "../icons/close_red.png";

const URL = "http://localhost:7070/notes";
export default function BoxNodes({ not, fun }) {
  const mass = not.notes;

  const del = (id) => {
    fetch(URL + `/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 204) {
        fun();
      }
    });
  };

  const delItem = (e) => {
    del(e.target.dataset.id);
    fun();
  };
  return (
    <div className="boxNodes">
      {mass.map((item, idx) => (
        <div className="item_note" key={idx}>
          <div className="box_close" onClick={delItem}>
            <img data-id={item.id} src={redKrest} className="box_close_img" />
          </div>
          <div className="box_text">{item.content}</div>
        </div>
      ))}
    </div>
  );
}
