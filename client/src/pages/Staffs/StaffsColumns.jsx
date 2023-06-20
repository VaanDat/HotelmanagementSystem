import Popup from "reactjs-popup";
import ActionStaffModal from "./Modals/ActionStaffModal";
import Edit from "../../assets/edit.png";

export const StaffsColumns = [
  { Header: "Id", accessor: "ID" },
  { Header: "Fullname", accessor: "FULL_NAME" },
  { Header: "Gender", accessor: "GENDER" },
  { Header: "Birthday", accessor: "BIRTHDAY" },
  { Header: "Position", accessor: "POSITION" },
  { Header: "Identy Number", accessor: "IDENTY_NUMBER" },
  { Header: "Phonenumber", accessor: "PHONE_NUMBER" },
  {
    Header: "Actions",
    Cell: ({ row }) => (
      <Popup
        modal
        trigger={
          <button>
            <img className="w-7 h-7 translate-x-4" src={Edit} alt="" />
          </button>
        }
      >
        {(close) => (
          <ActionStaffModal
            close={close}
            ID={row.original.ID}
            fullname={row.original.FULL_NAME}
            gender={row.original.GENDER}
            birthday={row.original.BIRTHDAY}
            position={row.original.POSITION}
            identynumber={row.original.INDENTY_NUMBER}
            phonenumber={row.original.PHONE_NUMBER}
          />
        )}
      </Popup>
    ),
  },
];
