export class ClassProcessor {
    public static clearSelectedBoxes(): void {
        const allBoxes = document.getElementsByClassName('datebox') as unknown as HTMLDivElement[];
        for (const box of allBoxes) {
            if (box.classList.contains('selected')) {
                box.classList.remove('selected');
            }
        };
    }
}