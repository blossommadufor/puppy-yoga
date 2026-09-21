export const classOptions = [{
        id: "puppy-yoga",
        title: "Puppy Yoga",
        duration: "60 mins",
        basePrice: 35000,
        capacity: "Maximum of 11 people",
        tag: "puppies",
        desc: "A relaxing, beginner-friendly yoga flow where curious, playful puppies freely wander the room, snuggle on your mat, and bring pure joy to your practice.",
        benefits: [
            "60-minute guided yoga session",
            "Puppy play time",
            "A paw polariod picture",
            "A yoga mat",
            "A cup of coffee or matcha"
        ]
    },
    {
        id: "yoga-matcha",
        title: "Kitten Yoga",
        duration: "60 mins",
        basePrice: 35000,
        capacity: "Maximum of 11 people",
        tag: "Kittens",
        desc: "Find your flow surrounded by sweet, playful kittens pouncing on mats and curling up for cuddles,",
        benefits: [
            "60-minute guided yoga session",
            "Kitten play time",
            "A paw polariod picture",
            "A yoga mat",
            "A cup of coffee or matcha"
        ]
    },
];
export const getDynamicBookingData = () => {
    const availableDates = [];
    const timeSlotsByDate = {};
    const today = new Date();

    // Loop through the next 7 days
    for (let i = 0; i < 7; i++) {
        const current = new Date();
        current.setDate(today.getDate() + i);

        const dayOfWeek = current.getDay(); // 0 = Sun, 5 = Fri, 6 = Sat

        if (dayOfWeek === 5 || dayOfWeek === 6) {
            // Safely format local YYYY-MM-DD without UTC timezone shifts
            const year = current.getFullYear();
            const month = String(current.getMonth() + 1).padStart(2, "0");
            const day = String(current.getDate()).padStart(2, "0");
            const dateVal = `${year}-${month}-${day}`;

            // Format clean label (e.g., "Fri, Aug 1" or "Sat, Oct 10")
            const label = current.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
            });

            availableDates.push({ label, dateVal });

            // Assign time slots
            if (dayOfWeek === 5) {
                timeSlotsByDate[dateVal] = ["10:00 AM - 11:00 AM", "12:00 PM - 01:00 PM"];
            } else if (dayOfWeek === 6) {
                timeSlotsByDate[dateVal] = ["11:00 AM - 12:00 PM", "12:00 PM - 01:00 PM"];
            }
        }
    }

    return { availableDates, timeSlotsByDate };
};

// Export current week's slots automatically
export const { availableDates, timeSlotsByDate } = getDynamicBookingData();