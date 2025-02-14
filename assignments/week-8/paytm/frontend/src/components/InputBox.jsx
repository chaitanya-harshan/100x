const InputBox = ({ label, placeholder, setState }) => {
  function handleOnChange(e) {
    setState(e.target.value);
  }

  return (
    <div>
      <div className="font-semibold text-sm text-left py-2 pl-1">{label}</div>
      <input placeholder={placeholder} onChange={handleOnChange} className="text-sm w-full border rounded border-slate-300 px-2 py-1 w-full focus:outline-none" />
    </div>
  );
};

export default InputBox;
