// 游戏状态管理器
const Game = (() => {
    const SAVE_KEY = 'FAD_SAVE';
    
    const initialState = {
        level: 1,
        xp: 0,
        hp: 20,
        nextLevel: 100,
        log: []
    };

    // 初始化
    function init() {
        loadSave();
        render();
    }

    // 探索功能
    function explore() {
        const roll = rollDice(6);
        addLog(`掷出探索骰子: D6 = ${roll}`);

        // 事件处理
        if(roll <= 2) encounterEnemy();
        else if(roll <= 4) findTreasure();
        else restArea();

        checkLevelUp();
        saveGame();
        render();
    }

    // 其他私有方法...
    
    return {
        init,
        explore
    };
})();

// 页面加载后自动初始化
window.addEventListener('DOMContentLoaded', Game.init);