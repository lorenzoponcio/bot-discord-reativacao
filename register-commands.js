const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('reativacao')
    .setDescription('Abrir formulário de reativação')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Registrando comando...');

    await rest.put(
     Routes.applicationGuildCommands(
  process.env.CLIENT_ID,
  process.env.GUILD_ID
),
      { body: commands },
    );

    console.log('Comando registrado com sucesso.');
  } catch (error) {
    console.error(error);
  }
})();