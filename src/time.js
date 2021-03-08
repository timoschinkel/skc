export const duration_to_seconds = (time) => {
    const parts = time.split(':').reverse();
    
    return parseInt(parts[0])
        + (parts.length > 1 ? (parseInt(parts[1]) * 60) : 0)
        + (parts.length > 2 ? (parseInt(parts[2]) * 3600) : 0);

}