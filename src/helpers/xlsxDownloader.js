//to create an xlsx file and download from client
import React, { Fragment } from 'react';
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';

export default function TableDownload(props) {
  return (
    <Fragment>
      <button onClick={_ => {
        console.log('data ',props.data)
        var wb = XLSX.utils.book_new();
        let filePrepared =  XLSX.utils.json_to_sheet(props.data)
        XLSX.utils.book_append_sheet(wb, filePrepared, "WorksheetName");
        let downloadable = async () => await XLSX.write(wb, {bookType:'xlsx', type:'binary'})
        function s2ab(s) {
        	var buf = new ArrayBuffer(s.length);
        	var view = new Uint8Array(buf);
        	for (var i=0; i!==s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        	return buf;
        }
        console.log(wb)
        downloadable().then((data)=>{
          saveAs(new Blob([s2ab(data)],{type:"application/octet-stream"}), "sheetjs.xlsx");

        })
      }}>Download as xlsx</button>
    </Fragment>
  );
}
