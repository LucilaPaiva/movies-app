import { FC, useEffect, useState } from "react";
import { FormsFields  } from "../../../types";
import "./styles.scss"

const defaultValues: FormsFields = {
  query: "",
  page: undefined
};

type Props = {
    onSearch: (params: FormsFields) => void;
}

const Search: FC<Props> = ({ onSearch }) => { //resuelve el componente desde donde llega esta Prop
  const [fields, setFields] = useState(defaultValues);
  //el set fields me permite usar este estado que va a ir cambiando

  useEffect(() => {
    onSearch(fields);
  }, [fields]);

  return (
    <form action="mb-5 container-form">
      <div className="form-group  my-form mb-3">
        <label className="search">Search</label>
        <input
          type="text"
          name="text"
          className="Form-control my-form-control"
          value={fields.query}
          onChange={(e) => setFields({...fields, query: e.target.value})}
        />
      </div>
    </form>
  );
};

export { Search };
