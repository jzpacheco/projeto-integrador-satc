import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'educaplay.settings')
django.setup()

from science.models import Question

perguntas = [
    {
        "pergunta": "Qual é o nome da galáxia onde se localiza o sistema solar?",
        "opcoes": ["a) Via Láctea", "b) Andrômeda", "c) Triângulo"],
        "respostaCorreta": "a",
    },
    {
        "pergunta": "Qual é o nome do planeta conhecido como o 'planeta vermelho'?",
        "opcoes": ["a) Vênus", "b) Júpiter", "c) Marte"],
        "respostaCorreta": "c",
    },
    {
        "pergunta": "Quantos planetas existem no sistema solar?",
        "opcoes": ["a) 10", "b) 11", "c) 7 ", "d) 8"],
        "respostaCorreta": "d",
    },
    {
        "pergunta": "O que são planetas gasosos??",
        "opcoes": ["a) Planetas feitos principalmente de rochas e metais", "b) Planetas sem atmosfera", "c) Planetas feitos principalmente de gases", "d) Planetas feitos principalmente de gelo"],
        "respostaCorreta": "c",
    },
    {
        "pergunta": "Qual é o planeta mais próximo do Sol?",
        "opcoes": ["a) Terra", "b) Vênus", "c) Mercúrio", "d) Marte"],
        "respostaCorreta": "c",
    },
    {
        "pergunta": "Qual é o maior planeta do sistema solar?",
        "opcoes": ["a) Júpiter", "b) Saturno", "c) Urano", "d) Netuno"],
        "respostaCorreta": "a",
    },
    {
        "pergunta": "Qual é o nome da estrela que fica no centro do sistema solar?",
        "opcoes": [" a) Alfa Centauri", "b) Sirius", "c) Sol", "d) Lua"],
        "respostaCorreta": "c",
    },
    {
        "pergunta": "O que é um cometa?",
        "opcoes": ["a) Um planeta", "b) Um tipo de estrela", "c) Um corpo celeste composto por gelo, poeira e rochas", "d) Uma galáxia"],
        "respostaCorreta": "c",
    },
    {
        "pergunta": "Qual é a ordem correta dos planetas do sistema solar, começando do mais próximo ao Sol?",
        "opcoes": ["a) Terra, Vênus, Marte, Júpiter, Saturno, Urano, Netuno", "b) Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno", "c) Mercúrio, Vênus, Terra, Marte, Saturno, Júpiter, Urano, Netuno", "d) Marte, Vênus, Terra, Mercúrio, Júpiter, Saturno, Urano, Netuno"],
        "respostaCorreta": "b",
    },
    {
        "pergunta": "Qual é o planeta conhecido como gigante gasoso?",
        "opcoes": ["a) Marte", "b) Júpiter", "c) Vênus", "d) Terra"],
        "respostaCorreta": "b",
    },
    {
        "pergunta": "Qual é o nome da maior lua de Saturno?",
        "opcoes": ["a) Deimos", "b) Lua", "c) Io", "d) Titã"],
        "respostaCorreta": "d",
    },
    {
        "pergunta": "Qual é o quarto planeta do sistema solar, partindo do Sol?",
        "opcoes": ["a) Vênus", "b) Marte", "c) Terra", "d) Saturno"],
        "respostaCorreta": "b",
    },
    {
        "pergunta": "Qual é a diferença entre uma estrela e um planeta?",
        "opcoes": ["a) Estrelas têm atmosferas, enquanto planetas não têm.", "b) Estrelas são menores que planetas.", "c) Estrelas têm luz própria, enquanto planetas refletem a luz do Sol.", "d) Estrelas estão mais próximas do Sol do que os planetas."],
        "respostaCorreta": "c",
    },
]

for p in perguntas:
    question = Question(
        text=p['pergunta'],
        options=p['opcoes'],
        correct_answer=p['respostaCorreta']
    )
    question.save()

print("Perguntas de ciências adicionadas com sucesso!")
