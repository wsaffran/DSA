function solveTowerOfHanoi(n) {
    let steps = [];

    generateSteps(n, 'A', 'C', 'B', steps);

    return steps;
}

function generateSteps(n, fromTower, toTower, usingTower, steps) {
    if (n === 1) {
        steps.push(`Move disk ${n} from ${fromTower} to ${toTower}`);
        return;
    }
    
    generateSteps(n - 1, fromTower, usingTower, toTower, steps);
    steps.push(`Move disk ${n} from ${fromTower} to ${toTower}`);
    generateSteps(n - 1, usingTower, toTower, fromTower, steps);
}

console.log(solveTowerOfHanoi(3));
