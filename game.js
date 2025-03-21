// 游戏状态
let player = {
    level: 1,
    xp: 0,
    hp: 20
};

// 绑定探索按钮
document.querySelector('.action-btn').addEventListener('click', explore);

function explore() {
    console.log('[调试] 按钮点击生效');
    const logBox = document.getElementById('gameLog');
    logBox.innerHTML += `<p>探索地牢被点击！</p>`;
    
    // 模拟简单互动
    player.xp += 10;
    updateStatus();
}

function updateStatus() {
    document.getElementById('level').textContent = player.level;
    document.getElementById('xp').textContent = player.xp;
    document.getElementById('hp').textContent = player.hp;
}

// 初始化
updateStatus();
