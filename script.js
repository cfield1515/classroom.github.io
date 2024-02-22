// script.js
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var classroom = document.getElementById("classroom").value;
    var timeslot = document.getElementById("timeslot").value;
    // Here you can implement logic for storing data, preventing double bookings,
    // and sending emails (requires backend logic).
    // For simplicity, we'll just display a message.
    var message = `Classroom ${classroom} booked for ${timeslot}.`;
    document.getElementById("message").textContent = message;
});
