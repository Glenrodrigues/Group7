window.onload = function() {
    var basicCommands = document.getElementById('basicCommands');
    var branchingCommands = document.getElementById('branchingCommands');
    var newCommandsList = document.getElementById('newCommands');

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
  
    var newCommands = [
        { command: 'git log', description: 'View the commit history.' },
        { command: 'git diff', description: 'View changes to files.' },
        { command: 'git clone', description: 'Clone a repository into a new directory.' },
        { command: 'git remote add origin', description: 'Add a remote repository.' },
        { command: 'git tag',description: 'Create, list, delete or verify a tag object signed with GPG'},
        { command: 'git fetch',description: 'Download objects and refs from another repository'},
        { command: 'git rebase',description: 'Reapply commits on top of another base tip'},
        
    ];

    gitCommands.forEach(function(cmd) {
        var li = document.createElement('li');
        li.textContent = cmd.command + ': ' + cmd.description;
        basicCommands.appendChild(li);
    };

    gitBranchingCommands.forEach(function(cmd) {
        var li = document.createElement('li');
        li.textContent = cmd.command + ': ' + cmd.description;
        branchingCommands.appendChild(li);
    });

    newCommands.forEach(function(cmd) {
        var li = document.createElement('li');
        li.textContent = cmd.command + ': ' + cmd.description;
        newCommandsList.appendChild(li);
    });
}
