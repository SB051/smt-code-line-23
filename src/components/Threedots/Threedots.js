function Threedots(props) {
  return (
    <div
      className={`${props.speeder ? "speeddots" : "threedots"} flex space-x-2`}
    >
      <div className="dot h-3 w-3 rounded-full bg-sky-950" />
      <div className="dot h-3 w-3 rounded-full bg-sky-950" />
      <div className="dot h-3 w-3 rounded-full bg-sky-950" />
    </div>
  );
}

export default Threedots;
