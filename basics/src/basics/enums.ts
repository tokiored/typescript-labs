/**
 *
 * enums
 *
 */
enum Priority {
    Lowest = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Urgent = 4,
}
function priority(title: string, priority: number) {
    if (priority === Priority.Lowest) {
        console.log(`${title} is a ${Priority[priority]} priority`)
    } else if (priority === Priority.Low) {
        console.log(`${title} is a ${Priority[priority]} priority`)
    } else if (priority === Priority.Medium) {
        console.log(`${title} is a ${Priority[priority]} priority`)
    } else if (priority === Priority.High) {
        console.log(`${title} is a ${Priority[priority]} priority`)
    } else if (priority === Priority.Urgent) {
        console.log(`${title} is a ${Priority[priority]} priority`)
    }
}

priority('Fix computer', 3)
