const Button = (props: { title: string }) => {
  return (
    <button
      className=" bg-white text-black border  rounded-lg p-1 text-sm"
      style={{ marginRight: "2px", marginLeft: "20px" }}
    >
      {props.title}
    </button>
  );
  
};

export default Button;
