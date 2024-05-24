import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";

const Addroom = () => {

    const [dates, setDates] = useState(
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    )

    //Date range handler
    const handleDates = item => {
        console.log(item)
        setDates(item.selection)
    }

    return (
        <div>
            <h1>Add room page</h1>

            {/* form */}
            <AddRoomForm dates={dates} handleDates={handleDates}></AddRoomForm>
        </div>
    );
};

export default Addroom;