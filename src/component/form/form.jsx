import Button from "../button/button";
import InputField from "../input-field/input-field";
 
const Form = (props) => {
  return (
    <form>
      <InputField type="text" label="Prénom" name="prenom" id="prenom" />
      <br />
      <InputField type="text" label="Nom" name="nom" id="nom" />
      <br />
      <InputField type="number" label="Age" name="age" id="age" />
      <br />
      <Button label={props.misAjour ? "Mettre à jour" : "Créer"} />
      <br />
    </form>
  );
};

export default Form;