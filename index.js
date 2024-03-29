function saldoVitorias(wins, losses) {
    return wins - losses;
}


function heroRank(saldoVitorias) {
    if (saldoVitorias <= 10) {
        return "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    } 
}

function heroStats(saldoVitorias) {
    const rank = heroRank(saldoVitorias);
    return `O Herói tem de saldo de ${saldoVitorias} vitorias e está no nível de ${rank}`;
}

console.log(heroStats(saldoVitorias(50, 20)));


