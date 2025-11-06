/**
 * BASE DE DADOS DE UTILIZADORES (Estático)
 * Esta lista define quem pode aceder ao sistema.
 * * IMPORTANTE: Como este ficheiro está no GitHub Pages, ele é PÚBLICO.
 * (A segurança aqui baseia-se no facto de o RA ser conhecido, mas não ser uma senha secreta).
 */

// NOTA: Usei os seus dados de exemplo. 
// Adicione TODOS os seus alunos e professores a esta lista.
const usuarios = [
    // Alunos
    { NomeCompleto: "João M. Santos", Email: "aluno1a@escola.com", RA: "10001", Turma: "1A", Perfil: "Aluno" },
    { NomeCompleto: "Maria T. Costa", Email: "aluno3b@escola.com", RA: "30005", Turma: "3B", Perfil: "Aluno" },
    
    // Adicione todos os seus alunos da Planilha 'USERS' aqui...
    // { NomeCompleto: "Nome Aluno", Email: "email@aluno.com", RA: "12345", Turma: "1A", Perfil: "Aluno" },

    // Professores
    { NomeCompleto: "Professor SESI", Email: "professorsesi176@gmail.com", RA: "9999", Turma: "", Perfil: "Professor" }
];

// Torna a variável 'usuarios' acessível globalmente
window.listaDeUsuarios = usuarios;
