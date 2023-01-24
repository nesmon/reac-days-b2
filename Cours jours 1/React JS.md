React est une bibliothèque JavaScript conçue pour construire des interfaces utilisateur. Elle est maintenue par Facebook et une communauté de développeurs (individuels et d'entreprises). React permet aux développeurs de construire des **composants** d'interface utilisateur **réutilisables** et de gérer l'état des applications de manière efficace. Elle est principalement utilisée pour construire des applications à une seule page (SPA) et mobiles (React Native).


### Rappel de Javascript

JavaScript est un langage de script ou de programmation qui vous permet d'implémenter des fonctionnalités complexes sur des pages Web. Chaque fois qu'une page Web ne se contente pas d'afficher des informations statiques, qu'il s'agisse de mises à jour ponctuelles du contenu, de cartes interactives, de graphiques 2D/3D animés, de juke-boxes vidéo défilants, etc. Il s'agit de la troisième couche du gâteau des technologies Web standard avec HTML et CSS.

Cf cours de Node JS




### Du Javascript au React 


Pour comprendre comment React fonctionne, nous devons d'abord avoir une compréhension de base de la façon dont les navigateurs interprètent votre code pour créer des interfaces utilisateur (IU) interactives,
Lorsqu'un utilisateur visite une page web, le serveur renvoie au navigateur un fichier HTML qui peut ressembler à ceci :

``` html
<html>
	<body>
		<div>
			<h5>Apprendre React</h5>
			<h1>ISITECH</h1>
			<ul>
				<li>lorem</li>
				<li>ipsum</li>
				<li>foo bar</li>
			</ul>
		</div>
	</body>
</html>
```

Le navigateur lit le code HTML et construit le DOM (Document Object Model):

![[DOM_picture.png]]

Le **DOM** : Le **DOM** est une représentation objet des éléments HTML. Il agit comme un pont entre votre code et l'interface utilisateur, et possède une structure arborescente avec des relations parent-enfant.


Vous pouvez utiliser les méthodes du DOM et un langage de programmation, tel que JavaScript, pour écouter les événements utilisateur et [[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents|manipuler le DOM]] en sélectionnant, ajoutant, mettant à jour et supprimant des éléments spécifiques dans l'interface utilisateur. La manipulation du DOM vous permet non seulement de cibler des éléments spécifiques, mais aussi de modifier leur style et leur contenu.

Voyons comment vous pouvez utiliser JavaScript et les méthodes DOM.

Ressources additionnelles :
 - [[https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction|Approfondir les notions du DOM]]
 - [[https://developer.chrome.com/docs/devtools/dom/|Oberserver le DOM dans Google Chrome]]
 - [[https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/highlight_and_inspect_dom_nodes/index.html|Observer le DOM dans Mozilla Firefox]]




### Mise à jour de l'interface utilisateur avec du JavaScript et les méthodes du DOM

À présent, regardons comment utiliser Javascript et les méthodes du DOM en ajoutant une balise `h1` à votre projet.

Ouvrez un éditeur de code et créez un fichier `index.html` :
``` html
<!-- index.html -->
<html>
	<body>
		<div></div>
	</body>
</html>
```


Donnez à la `div` un `id` unique afin de pouvoir la manipuler plus tard avec le javascritpt : 



``` html
<!-- index.html -->
<html>
	<body>
		<div id="app"></div>
	</body>
</html>
```


Afin d'écrire du javascript au sein de votre fichier HTML, ajoutez une balise `script`:

``` html
<!-- index.html -->
<html>
	<body>
		<div id="app"></div>
		<script type="text/javascript"></script>
	</body>
</html>
```



Maintenant, à l'interieur de la balise `script`, on peut utiliser une méthode du DOM : `getElementById()`, pour sélectionner la balise `div` grâce à son `id`:

``` html
<!-- index.html -->
<html>
	<body>
		<div id="app"></div>
		<script type="text/javascript">
			const app = document.getElementById('app');
		</script>
	</body>
</html>
```



Toujours avec des méthodes du DOM créons une nouvel élément HTML, une balise `h1`:

``` html
<html>
	<body>
		<div id="app"></div>
		<script type="text/javascript">

			// Sélection de la balise div avec l'id 'app'
			const app = document.getElementById('app');

			// Création d'un nouvel élément HTML, une balise h1
			const header = document.createElement('h1');
		
			// Création de texte pour l'élément HTML h1
			const headerContent = document.createTextNode(
				'De l\'html créé avec Javascript!'
			);

			// Ajout du texte à l'élément HTML h1
			header.append(headerContent);


			// Ajout de l'élément HTML à l'intérieur de la div
			app.appendChild(header);
		
		</script>
	</body>
</html>
```

Testez le code afin de vous assurer que tout fonctionne ! Si vous utilisez Visual Studio Code, l'extension : [[https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer| Live Server]] peut vous faciliter la tâche.





### HTML et le DOM

Allez maintenant inspecter les éléments du DOM, vous remarquerez que le DOM comprend l'élément `<h1>`. Le DOM de la page est différent du code source - ou en d'autres termes, du fichier HTML original que vous avez créé.

En effet, le HTML représente le contenu initial de la page, tandis que le DOM représente le contenu actualisé de la page qui a été modifié par le code JavaScript que vous avez écrit.

Mettre à jour le DOM avec du simple JavaScript est très puissant mais aussi très verbeux. Vous avez écrit tout ce code pour ajouter un élément <h1> avec du texte.
```html
<!-- index.html -->
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('De l\'html créé avec Javascript!');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

À mesure que la taille d'une application ou d'une équipe augmente, il peut devenir de plus en plus difficile de construire des applications de cette manière.

Avec cette approche, les développeurs passent beaucoup de temps à écrire des instructions pour dire à l'ordinateur comment il doit faire les choses. Mais ne serait-il pas plus agréable de décrire ce que vous voulez montrer et de laisser l'ordinateur se débrouiller pour mettre à jour le DOM ?


### Programmation Impérative / Programmation Déclarative

Le code ci-dessus est un bon exemple de programmation impérative. Vous écrivez les étapes de la mise à jour de l'interface utilisateur. Mais lorsqu'il s'agit de construire des interfaces utilisateur, une approche déclarative est souvent préférée car elle permet d'accélérer le processus de développement. Au lieu de devoir écrire des méthodes du DOM, il serait utile que les développeurs puissent déclarer ce qu'ils veulent afficher (dans ce cas, une balise h1 avec du texte).

En d'autres termes, la programmation impérative revient à donner à un chef cuisinier des instructions étape par étape sur la façon de préparer une pizza. La programmation déclarative, c'est comme commander une pizza sans se préoccuper des étapes nécessaires à sa fabrication. 🍕

La bibliothèque déclarative la plus populaire qui aide les développeurs à construire des interfaces utilisateur c'est **React**.



### Premiers pas avec React

Pour utiliser React dans votre projet, vous pouvez charger deux scripts React depuis un site Web externe appelé [unpkg.com] (https://unpkg.com/) :

- **react** est la bibliothèque React de base.
- **react-dom** fournit des méthodes spécifiques au DOM qui vous permettent d'utiliser React avec le DOM.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
    </script>
  </body>
</html>
```


Au lieu de manipuler directement le DOM avec du simple JavaScript, vous pouvez utiliser la méthode ReactDOM.render() de react-dom pour demander à React de rendre notre titre <h1> dans notre élément #app.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <script type="text/javascript">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app);
    </script>
  </body>
</html>
```

Mais si vous exécutez ce code dans le navigateur, vous obtiendrez une erreur de syntaxe. 

C'est parce que <h1>...</h1> n'est pas du Javascript valide. Ce morceau de code est du JSX.

#### Qu'est-ce que le JSX ? 

JSX est une extension syntaxique pour JavaScript qui vous permet de décrire votre interface utilisateur dans une syntaxe familière de type HTML. L'avantage de JSX est qu'à part le respect de [[https://beta.reactjs.org/learn/writing-markup-with-jsx#the-rules-of-jsx|trois règles JSX]], vous n'avez pas besoin d'apprendre de nouveaux symboles ou de nouvelles syntaxes en dehors de HTML et JavaScript.

Notez que les navigateurs ne comprennent pas JSX d'emblée. Vous aurez donc besoin d'un compilateur JavaScript, tel que [[https://babeljs.io/|Babel]], pour transformer votre code JSX en JavaScript normal.

Pour ajouter Babel à votre projet, copier-coller le script suivant au sein de votre fichier `index.html`:
``` html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

En outre, vous devrez indiquer à Babel le code à transformer en changeant le type de script en <code>type=text/jsx</code>.

```html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const app = document.getElementById('app');
      ReactDOM.render(<h1>Lorem Ipsum</h1>, app);
    </script>
  </body>
</html>
```

Vous pouvez maintenant vous assurer que tout fonctionne correctement and executant le code dans votre navigateur web.

Nous venons d'écrire le code React **déclaratif** suivant: 

``` html 
<script type="text/jsx">
	const app = document.getElementById("app");
	ReactDOM.render(<h1>Lorem ipsum</h1>, app);
</script>
```

Ce code correspond au code impératif que nous avons écrit précédemment: 

``` html
	<script>
		const app = document.getElementById('app');
		const header = document.createElement('h1');
		const headerContent = document.createTextNode('Lorem Ipsum');
		header.appendChild(headerContent);
		app.appendChild(header);
	</script>
```

Vous pouvez commencer à voir comment, en utilisant React, vous pouvez réduire une grande partie du code répétitif.

Et c'est exactement ce que fait React, c'est une bibliothèque qui contient des bouts de code réutilisables qui exécutent des tâches à votre place - dans ce cas précis, la mise à jour de l'interface utilisateur.   


Remarque : il n'est pas nécessaire de savoir exactement comment React met à jour l'interface utilisateur pour commencer à l'utiliser, mais si vous souhaitez en savoir plus, consultez les sections sur les **UI trees** et les méthodes de rendu (render method sections) dans la documentation React .


Ressource additionnelles : 
- [[https://beta.reactjs.org/learn/writing-markup-with-jsx|le langage de balise JSX]]


###  Les prérequis Javascript pour bien débuter avec React.

Bien que vous puissiez apprendre JavaScript et React en même temps, **le fait d'être familier avec JavaScript peut très fortement faciliter le processus d'apprentissage de React.**

Dans les prochaines sections, nous vous présenterons certains concepts fondamentaux de React du point de vue de JavaScript. Voici un résumé des sujets JavaScript qui seront mentionnés :

-   [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) and [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
-   [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
-   [Arrays and array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
-   [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
-   [Ternary Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
-   [ES Modules and Import / Export Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

Bien que ce cours ne soit pas consacré à JavaScript, il est bon de se tenir au courant des dernières versions de JavaScript. Mais si vous ne vous sentez pas encore compétent en JavaScript, ne laissez pas cela vous empêcher de commencer à construire avec React !




### Les concepts fondamentaux de REACT

Il existe trois concepts fondamentaux de React avec lesquels vous devrez vous familiariser pour commencer à créer des applications React. Il s'agit de :

Composants (Components)
Props
État (State)
Dans les prochaines sections, nous allons passer en revue les concepts ci-dessus et fournir des ressources où vous pouvez continuer à les apprendre.













###  Contruire des interfaces utilisateurs avec des composants


Les interfaces utilisateur peuvent être décomposées en blocs de construction plus petits appelés composants.

Les composants vous permettent de construire des bouts de code autonomes et réutilisables. Si vous considérez les composants comme des briques LEGO, vous pouvez prendre ces briques individuelles et les combiner ensemble pour former des structures plus grandes. Si vous devez mettre à jour un élément de l'interface utilisateur, vous pouvez mettre à jour le composant ou la brique en question.

![[MediaComponent.png]]


Cette modularité permet à votre code d'être plus facile à maintenir à mesure qu'il se développe, car vous pouvez facilement ajouter, mettre à jour et supprimer des composants sans toucher au reste de notre application.

Ce qui est bien avec les composants React, c'est qu'ils ne sont que du JavaScript. Voyons comment vous pouvez écrire un composant React, d'un point de vue JavaScript :


#### La création de composants: 

Dans React, les composants sont des fonctions. Au sein de votre balise <code>script</code>, écrivez une fonction appelée <code>header</code>:
``` html 
<script>
	const app = document.getElementById("app")
	function header() {
		
	}

ReactDOM.render(<h1>Lorem ipsum</h1>, app);
	
</script>
```


Un composant est une fonction qui renvoie des éléments d'interface utilisateur. Dans l'instruction de retour de la fonction, vous pouvez écrire du JSX :


```html
<script type="text/jsx">
  const app = document.getElementById("app")

  function header() {
     return (<h1>Lorem ipsum</h1>)
   }

  ReactDOM.render(, app)
</script>
```

Pour faire apparaître ce composant dans le DOM, vous pouvez le passer comme premier argument dans la méthode ReactDOM.render() :

```html
<script type="text/jsx">

  const app = document.getElementById("app")

  function header() {
     return (<h1>Lorem ipsum</h1>)
   }


   ReactDOM.render(header, app)
</script>
```



Si vous essayez d'exécuter le code ci-dessus dans votre navigateur, vous obtiendrez une erreur. Pour que cela fonctionne, il y a deux choses que vous devez faire :

Premièrement, les composants React doivent être mis en majuscules pour les distinguer du HTML et du JavaScript.

```jsx
function Header() {
  return <h1>Lorem ipsum</h1>;
}

// Capitalize the React Component
ReactDOM.render(Header, app);
```


Deuxièmement, vous utilisez les composants React de la même manière que vous utiliseriez des balises HTML ordinaires, avec des crochets '<>'.

```jsx
function Header() {
  return <h1>Lorem ipsum</h1>;
}

ReactDOM.render(<Header />, app);
```


#### Imbriquer des composants: 

Les applications comprennent généralement plus de contenu qu'un seul composant. Vous pouvez imbriquer les composants React les uns dans les autres comme vous le feriez avec des éléments HTML ordinaires.

Dans votre exemple, créez un nouveau composant appelé Home :

``` javascript

	function Header() {
		return <h1>Lorem ipsum</h1>
	}

	function Home() { 
		return <div></div>
	}

	ReactDOM.render(<Header />, app);

```


Ensuite on peut imbriquer le composant <code>Header</code> à l'intérieur du composant <code>Home</code>:


``` javascript
	function Header() {
		return <h1>Lorem ipsum</h1>;
	}

	function Home() {
		return (
			<div>
				<Header />
			</div>
		)
	}

	ReactDOM.render(<Header />, app)
```



#### Une arborescence de composants


En React, vous pouvez continuer à imbriquer des composants de cette manière de façon à créer de véritables arbres de composants: 
![[component_tree.png]]

Par exemple, le composant supérieur de votre page d'accueil peut contenir un composant d'en-tête, un article et un pied de page. Et chacun de ces composants pourrait à son tour avoir ses propres composants enfants et ainsi de suite. Par exemple, le composant En-tête pourrait contenir un logo, un titre et un composant de navigation.

Ce format modulaire vous permet de réutiliser les composants à différents endroits dans votre application.

Dans votre projet, puisque <Home> est maintenant votre composant de premier niveau, vous pouvez le passer à la méthode ReactDOM.render() :

```jsx
function Header() {
  return <h1>Lorem ipsum</h1>;
}

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<Home />, app);
```

Dans la prochaine section, nous aborderons les props et la manière dont vous pouvez les utiliser pour transmettre des données entre vos composants.








### Afficher des données avec des Props



Jusqu'à présent, si vous deviez réutiliser votre composant <code>Header</code>, il afficherait le même contenu les deux fois.

```jsx
unction Header() {
  return <h1>Lorem Ipsum</h1>;
}

function Home() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
```

Mais que se passe-t-il si vous souhaitez transmettre un texte différent ou si vous ne connaissez pas les informations à l'avance parce que vous récupérez des données à partir d'une source externe ?

Les éléments HTML réguliers ont des attributs que vous pouvez utiliser pour transmettre des informations qui modifient le comportement de ces éléments. Par exemple, la modification de l'attribut `src` d'un élément <code>img</code> modifie l'image affichée. Changer l'attribut `href` d'une balise `a` change la destination du lien.

De la même manière, vous pouvez transmettre des informations en tant que propriétés aux composants React. Ceux-ci sont appelés **props**.

![[button_props.png]]

De la même manière qu'avec une fonction Javascript, vous pouvez concevoir des composants qui acceptent des arguments personnalisés (ou **props**) qui modifient le comportement du composant ou ce qui est affiché lors du rendu du composant à l'écran.

On peut passer ces **props** d'un composant parent à un composant enfant.

**Remarque :** dans React, les données circulent dans le sens de  l'arborescence des composants. C'est ce qu'on appelle un flux de données à sens unique. Le **state**, qui sera abordé dans la section suivante, peut être transmis des composants parent aux composants enfants en tant que **prop**.


#### Utilisation des props

Au sein de votre composant `Home`, vous pouvez une `prop` custom `title` au composant `Header`, de la même manière que vous utiliseriez un attribut HTML:

```jsx
// function Header() {
//   return <h1>Lorem Ipsum</h1>
// }

function Home() {
  return (
    <div>
      <Header title="Apprendre React" />
    </div>
  );
}

// ReactDOM.render(<Home />, app)
```

Et `Header`, le composant enfant, peut accepter les **props** en tant que ses premiers **paramètres de fonction**:

```jsx
function Header(props) {
//   return <h1>Lorem Ipsu,</h1>
// }

// function Home() {
//   return (
//     <div>
//       <Header title="Apprendre React" />
//     </div>
//   )
// }

// ReactDOM.render(<Home />, app)
```

Si vous utiliser `console.log()` sur props, vous verrez qu'il s'agit d'un objet avec une propriété `title`.

Étant donné que props est un objet Javascript, vous pouvez utiliser la destructuration pour nommer directement les valeurs des props à l'intérieur de vos paramètres de fonction:

```jsx
function Header({ title }) {
    console.log(title) // "Apprendre React"
//  return <h1>Apprendre React</h1>
// }

// function Home() {
//   return (
//     <div>
//       <Header title="Apprendre React" />
//     </div>
//   )
// }

// ReactDOM.render(<Home />, app)
```

On peut ensuite remplacer le contenu de la balise h1 avec la variable `title`: 


```jsx
function Header({ title }) {
  console.log(title);
  return <h1>title</h1>;
}
```

Si vous ouvrez votre projet dans le navigateur, vous verrez qu'il affiche le mot "titre". C'est parce que React pense que vous avez l'intention de rendre une chaîne de texte brut au DOM.

Vous avez besoin d'un moyen d'indiquer à React qu'il s'agit d'une variable JavaScript.


#### Usage des variables en JSX: 

Pour utiliser les variables que vous avez définies, vous devez les placer entre accolades `{}`,  il s'agit de la syntaxe JSX qui vous permet d'écrire du Javascript Vanilla directement au sein des balises JSX.


```jsx
// function Header({title}) {
//  console.log(title)
return <h1>{title}</h1>;
// }
```

Vous pouvez considérer les accolades comme un moyen d'écrire du JS dans du JSX. Vous pouvez ajouter n'importe quelle expression JavaScript (quelque chose qui évalue à une seule valeur) à l'intérieur des accolades. Par exemple:

- Une propriété d'objet: 
```jsx
	function Header({props}) {
		return <h1>{props.title}</h1>
	}
```

- Un template de string: 
```jsx
function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}
```

- La valeur de retour d'une fonction: 
``` jsx
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}
```

- Une ternaire: 
```jsx
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```

Vous pouvez maintenant passer n'importe quelle chaîne de caractères à votre prop de titre, et puisque vous avez pris en compte le cas par défaut dans votre composant avec l'opérateur ternaire, vous pouvez même ne pas passer du tout de prop de titre :

```jsx
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

Votre composant accepte maintenant une prop title générique, vous pouvez alors le réutiliser dans différentes parties de votre application. Tout ce que vous avez à faire c'est changer le titre:


```jsx
function Home() {
  return (
    <div>
      <Header title="Apprendre React" />
      <Header title="Lorem Ipsum" />
    </div>
  );
}
```

#### Parcourir des listes de données

Il est très courant de devoir afficher des éléments répétés provenant de liste. On peut utiliser les methdoes d'`Array` afin de manipuler de telles données et générer des éléments d'UI de style identique mais de contenu différents.

Ajoutez un tableau de nom dans votre composant `Home`:
```jsx
function Home() {
  const names = ['John Doe', 'Foo Bar', 'Linus T.'];

  return (
    <div>
      <Header title="Apprendre React" />
    </div>
  );
}
```

Vous pouvez ensuite utiliser la méthode array.map() pour parcourir le tableau et utiliser une fonction fléchée pour mapper un nom à un élément de liste :

```jsx
function Home() {
  const names = ['John Doe', 'Foo Bar', 'Linus T.'];

  return (
    <div>
      <Header title="Apprendre React" />
		   <ul>
		        {names.map((name) => (
		          <li>{name}</li>
		        ))}
		  </ul>
    </div>
  );
}
```

Si vous exécutez ce code, React nous donnera un avertissement concernant un accessoire de clé manquant. En effet, React a besoin de quelque chose pour identifier de manière unique les éléments d'un tableau afin de savoir quels éléments mettre à jour dans le DOM.

Vous pouvez utiliser les noms pour l'instant car ils sont actuellement uniques, mais il est recommandé d'utiliser quelque chose de garanti comme étant unique, comme un ID d'élément.

```jsx
function Home() {
  const names = ['John Doe', 'Foo Bar', 'Linus T.'];

  return (
    <div>
      <Header title="Apprendre React" />
		   <ul>
		        {names.map((name) => (
		          <li key={name} >{name}</li>
		        ))}
		  </ul>
    </div>
  );
}
```






### Ajouter de l'interaction avec le state 




Par exemple, créons un bouton similaire dans votre composant `Home`. Tout d'abord, ajoutez un élément  bouton à l'intérieur de l'instruction `return()` :

```jsx
function Home() {
  const names = ['John Doe', 'Foo Bar', 'Linus T.'];

  return (
    <div>
      <Header title="Apprendre React" />
		   <ul>
		        {names.map((name) => (
		          <li key={name} >{name}</li>
		        ))}
		  </ul>
		<button>Click</button>
    </div>
  );
}
```


#### Ecouter des évènements : 

Pour que le bouton fasse quelque chose lorsqu'il est cliqué, vous pouvez utiliser l'événement onClick:

```jsx
function Home() {
  // ...
  return (
    <div>
      {/* ... */}
      <button onClick={}>Compteur</button>
    </div>
  );
}
```

Dans React, les noms d'événements sont en `camelCased`. L'événement `onClick` est l'un des nombreux événements possibles que vous pouvez utiliser pour répondre à l'interaction de l'utilisateur. Par exemple, vous pouvez utiliser `onChange` pour les champs de saisie ou `onSubmit` pour les formulaires.


#### Gestion des évènements: 

Vous pouvez définir une fonction pour "gérer" (handle en anglais) les événements chaque fois qu'ils sont déclenchés. Créez une fonction avant l'instruction de retour appelée handleClick() :

```jsx
function Home() {
  // ...

  function handleClick() {
    console.log("incrementer le compteur")
  }

  return (
    <div>
      {/* ... */}
      <button onClick={}>Compteur</button>
    </div>
     )
   }
```


On peut ensuite appeler la fonction `handleClick` lorsque l'évènement est déclenché:

```jsx
function Home() {
  // ...

  function handleClick() {
    console.log("incrementer le compteur")
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Compteur</button>
    </div>
     )
   }
```

#### State et Hooks


React fournit un ensemble de fonctions appelées **Hooks**. Les **Hooks** vous permettent d'ajouter une logique supplémentaire telle qu'un état (**state**) à vos composants. Vous pouvez considérer le **state** comme toute information de votre interface utilisateur qui change au fil du temps, généralement déclenchée par l'interaction de l'utilisateur.

![[state_example.png]]

Vous pouvez utiliser le **hook** `useState` pour stocker et incrementer le nombre de fois que l'utilisateur a cliqué sur le bouton:

```jsx
function Home() {
  React.useState();
}
```

`useState` retourne un tableau, et vous pouvez accéder aux variables à l'intérieur de ce tableau en utilisant la destructuration: 

```jsx
function Home() {
  const [] = React.useState();

  // ...
}
```

La première valeur retournée par le **hook** `useState` et la valeur de l'état, que vous pouvez nommer comme bon vous semble. Il est toutefois fortement recommendé ( pour votre note finale, par exemple) d'utilser des noms de variable pertinents.
```jsx
function Home() {
  const [counter] = React.useState();

  // ...
}
```

Le deuxième élément du tableau est une fonction pour mettre à jour la valeur. Vous pouvez donner n'importe quel nom à la fonction de mise à jour, mais il est courant de la préfixer avec set suivi du nom de la variable d'état que vous mettez à jour :

```jsx
function Home() {
  const [counter, setCounter] = React.useState();

  // ...
}
```

Vous pouvez également en profiter pour ajouter la valeur initiale de votre state : zéro.

```jsx
function Home() {
  const [counter, setCounter] = React.useState(0);

  // ...
}
```