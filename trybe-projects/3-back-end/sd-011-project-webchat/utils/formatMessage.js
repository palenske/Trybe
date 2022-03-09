module.exports = (nickname, chatMessage) => {
    const currentDate = new Date();
    const msgTime = currentDate.toLocaleTimeString('pt-BR', { hour12: true });
    const msgDate = currentDate.toLocaleDateString('pt-BR').replace(/\//g, '-');
    return `${msgDate} ${msgTime} ${nickname}: ${chatMessage}`;
};
