export const saveProgressToTxt = (levels, completedLevels) => {
    const progress = {
        levels,
        completedLevels
    };

    const progressString = JSON.stringify(progress, null, 2); // Convertir a JSON con indentación
    const blob = new Blob([progressString], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "game_progress.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};