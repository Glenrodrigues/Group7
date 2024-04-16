window.onload = function() {
    var heading = document.getElementById('heading');
    var colorButton = document.getElementById('colorButton');
    var textInput = document.getElementById('textInput');
    var textButton = document.getElementById('textButton');
    var basicCommands = document.getElementById('basicCommands');
    var branchingCommands = document.getElementById('branchingCommands');

    var gitCommands = [
        { command: 'git init', description: 'Initialize a new Git repository.' },
        { command: 'git add .', description: 'Add all new and changed files to the staging area.' },
        { command: 'git commit -m "Commit message"', description: 'Commit changes.' },
        { command: 'git status', description: 'Check the status of your repository.' },
        { command: 'git pull', description: 'Update your repository with the latest changes from the remote repository.' },
        { command: 'git push', description: 'Push your changes to the remote repository.' },
    ];

    var gitBranchingCommands = [
        { command: 'git branch', description: 'List all branches.' },
        { command: 'git branch branch_name', description: 'Create a new branch.' },
        { command: 'git checkout branch_name', description: 'Switch to a branch.' },
        { command: 'git merge branch_name', description: 'Merge a branch into the current branch.' },
    ];

    gitCommands.forEach(function(cmd) {
        var li = document.createElement('li');
        li.textContent = cmd.command + ': ' + cmd.description;
        basicCommands.appendChild(li);
    });

    gitBranchingCommands.forEach(function(cmd) {
        var li = document.createElement('li');
        li.textContent = cmd.command + ': ' + cmd.description;
        branchingCommands.appendChild(li);
    });

    colorButton.addEventListener('click', function() {
        heading.style.color = heading.style.color === 'red' ? 'black' : 'red';
    });

    textButton.addEventListener('click', function() {
        heading.textContent = textInput.value;
    });
}