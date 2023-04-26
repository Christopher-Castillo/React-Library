import Modal from "./Modal";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hideable: true },
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'author', headerName: 'Author', flex: 1 },
  { field: 'isbn', headerName: 'ISBN', flex: 1 },
  { field: 'genre', headerName: 'Genre', flex: 1 },
]

function EntryTable() {
  const [ open, setOpen ] = useState(false);
  const { bookData, getData } = useGetData();
  const [selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection Model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 5000 )
  }

  return (
    <>
      <Modal
        id = { selectionModel }
        open = { open }
        onClose = { handleClose }
      />
      <div className="dataModal">
        <button
          className='modalbutton'
          onClick={ handleOpen }>
            Create New Entry
          </button>
          <button
          className='modalbutton'
          onClick={ handleOpen }>
            Update Entry
          </button>
          <button
          className='modalbutton'
          onClick={ deleteData }>
            Delete Entry
          </button>
      </div>
      <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
      style={{ height: 400, width: '90%' }}>
        <h2>Your Book Shelf</h2>
          <DataGrid rows={ bookData } columns={ columns } rowsPerPageOptions={[5]}
        checkboxSelection={true}
        onSelectionModelChange={(item: any) => {
          setSelectionModel(item)
        }}
        />
      </div>
    </>
  )
}

export default EntryTable
