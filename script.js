// script.js
const classrooms = {
    classroom1: ["09:00 AM", "11:00 AM", "02:00 PM"],
    classroom2: ["10:00 AM", "01:00 PM", "03:00 PM"],
    classroom3: ["09:30 AM", "12:00 PM", "04:00 PM"]
};

document.getElementById("date").addEventListener("change", function() {
    const selectedDate = this.value;
    const classroom = document.getElementById("classroom").value;
    const timeslotSelect = document.getElementById("timeslot");
    timeslotSelect.innerHTML = '<option value="" selected disabled>Please select a time slot</option>';

    if (selectedDate && classroom) {
        const availableSlots = getAvailableTimeSlots(classroom, selectedDate);
        availableSlots.forEach(slot => {
            const option = document.createElement("option");
            option.value = slot;
            option.textContent = slot;
            timeslotSelect.appendChild(option);
        });
        timeslotSelect.disabled = false;
    } else {
        timeslotSelect.disabled = true;
    }
});

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const classroom = document.getElementById("classroom").value;
    const date = document.getElementById("date").value;
    const timeslot = document.getElementById("timeslot").value;

    // Here you can implement logic for preventing double bookings
    const message = `Classroom ${classroom} booked for ${date} at ${timeslot}.`;
    document.getElementById("message").textContent = message;
});

function getAvailableTimeSlots(classroom, date) {
    // Here you can implement logic to fetch booked slots for the selected date and classroom
    // For simplicity, we'll just return all slots for now
    return classrooms[classroom];
}
