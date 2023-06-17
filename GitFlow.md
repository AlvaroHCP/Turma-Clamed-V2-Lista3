# GitFlow

## 1. O que é?

O GitFlow é um modelo de fluxo de trabalho para projetos que utilizam o sistema de controle de versão Git. Ele se baseia na ideia de ter duas branches (ramificações) principais e várias branches de suporte. 

## 2. Como são Estruturadas as Branches
As duas branches principais são:

* **Master**: Essa branch contém o código fonte estável, que representa a versão de produção do software. É a branch onde o código finalizado é implantado.

* **Develop**: Essa branch é usada para o desenvolvimento contínuo do software. É a partir da branch "develop" que as outras branches são criadas, para o teste e desenvolvimento de features (funcionalidades).

Além das 2 branches principais, o GitFlow define as branches de suporte da seguinte forma:

* **Feature branches**: São criadas a partir da branch "develop" e usadas para desenvolver novas funcionalidades ou recursos. Quando uma feature é concluída, a branch é mesclada de volta na "develop". No caso de uma feature ser dividida entre 2 ou mais desenvolvedores, cada um tem sua própria branch feature, e ao final dos trabalhos de cada um, eles mesclam suas respectivas ranches na branch feature original, para a partir daí mesclar essa feature na branch "develop".

* **Release branches**: São criadas a partir da branch "develop" quando se pretende fazer uma nova versão do software, após todas as features desejadas terem sido mescladas na branch "develop". As correções de bugs e pequenos ajustes são realizados nesta branch, e quando está pronta para ser lançada, ela é mesclada tanto na "master" quanto na "develop".

* **Hotfix branches**: São criadas a partir da branch "master" quando é necessário corrigir bugs críticos na versão de produção. Como essas correções são urgentes, assim que a correção é feita, esta branch é mesclada diretamente tanto na branch "master" quanto na "develop", sem passar por nenhuma outra branch.

## 3. Fluxo das Branches

Exemplo de imagem de Fluxo:
[<img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=1066">](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

Com base no fluxo acima, um exemplo simplificado de fluxo pode ser acompanhado na descrição a serguir:

1. Ao iniciar um projeto, é criada a branch "master" ou "main". 

2. Da branch "master" é criada a branch "develop".

3. Para o desenvolvimento de uma feature, é criada a branch "feature/nomeDaFeature", para cada feature a ser desenvolvida.

4. Após a finalização de cada feature, cada branch correspondente é mesclada na branch "develop".

5. Com a branch "develop" pronta, é gerada a branch "release".

6. Estando tudo ok na branch "release", ela é mesclada na branch "master".

7. A branch "develop" é atualizada com as informações da branch "master".

8. Para o desenvolvimento de novas features, novas branches "feature/nomeDaFeature" devem ser criadas, e o processo segue novamente. 

9. Se houver algum bug urgente na branch "master", após a publicação da branch "release", é criada uma branch "HotFix" para a solução desse erro.

10. Com o erro solucionado, a branch "HotFix" é mesclada na branch "master".

11. Agora, que o erro na branch "master" está corrigido, a branch "develop" deve ser atualizada com as informações da branch "master".

12. Todas as branches "feature" devem atualizar as informações que vieram da branch "develop".

13. A partir deste momento, o processo volta ao fluxo de terminar as features, mesclar na develop, etc...



## 4. Por quê usar GitFlow?

O GitFlow permite um desenvolvimento estruturado e organizado, permitindo que cada desenvolvedor trabalhe simultaneamente sem comprometer o projeto. Com o isolamento de funcionalidades em branches específicas para seu desenvolvimento e teste, permite uma menor taxa de erros nas funcionalidades desenvolvidas. Seu protocolo de correções de bugs, permite a solução de problemas de forma rápida, minimizando os danos de um erro na execução de projeto. Facilitando o trabalho em equipe e garantindo a estabilidade das versões de produção, se torna o método ideal para ser utilizado em projetos.

Mais informações podem ser encontradas em [GitFlow - GitHub](https://github.com/petervanderdoes/gitflow-avh) 

<p><img src="https://img.icons8.com/?size=512&id=467&format=png" style="width: 30px;"></p>

<!-- * [![GitHub Logo](https://img.icons8.com/?size=512&id=467&format=png)](https://github.com/) -->

 
 