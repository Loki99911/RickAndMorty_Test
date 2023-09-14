import { Characters } from "../types/ICharactersRedux";
import Papa from "papaparse";

export const uploadCSV = (csvData: Characters[] | Characters) => {
 
  let dataString;
  if (Array.isArray(csvData)) {
    dataString = Papa.unparse(csvData);
  } else {
    dataString = JSON.stringify(csvData);
  }

  const blob = new Blob([dataString], { type: "text/csv" });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "data.csv";

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};
