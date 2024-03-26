'use client'
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from "react"

export default function DateTimeReserve({ onDateTimeChange }: { onDateTimeChange: Function }) {

    const [reserveDateTime, setReserveDateTime] = useState<Date | null>(null)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                value={reserveDateTime}
                onChange={(value) => { setReserveDateTime(value); onDateTimeChange(value) }}
            />
        </LocalizationProvider>
    );
}