const InputField = (props) => {
    return (
      <>
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} type={props.type} name={props.name} />
      </>
    );
  };
  
  export default InputField;