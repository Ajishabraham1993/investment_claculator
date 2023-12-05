export default function InputGroup({label,onChangeVal,values}){
    return (
        <div className="m-2">
            <label>{label}</label>
            <input
              type="number"
              className="initial_inv"
              value={values}
              onChange={onChangeVal}
            />
          </div>
    );
}