function DropdownFilter(props) {
  return (
    <>
      <select class="form-select" aria-label="Default select example">
        <option value={"TODOS"}> {props.opcao} </option>
        <option value={"BAIXO"}> BAIXO </option>
        <option value={"MÉDIO"}> MÉDIO </option>
        <option value={"ALTO"}> ALTO</option>
        <option value={"MUITO ALTO"}> MUITO ALTO </option>
      </select>
    </>
  );
}

export default DropdownFilter;
