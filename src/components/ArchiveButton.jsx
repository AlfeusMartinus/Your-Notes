import React from "react";

function ArchiveButton({ id, name, onArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {name}
    </button>
  );
}

export default ArchiveButton;
