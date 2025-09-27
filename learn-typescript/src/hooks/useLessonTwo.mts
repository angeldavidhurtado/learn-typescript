// To parse this data:
//
//   import { Convert, GihubAPIResponse } from "./file"
//
//   const gihubAPIResponse = Convert.toGihubAPIResponse(json)

export type GihubAPIResponse = {
    total_count:        number
    incomplete_results: boolean
    items:              Item[]
}

export type Item = {
    id:                          number
    node_id:                     string
    name:                        string
    full_name:                   string
    private:                     boolean
    owner:                       Owner
    html_url:                    string
    description:                 null | string
    fork:                        boolean
    url:                         string
    forks_url:                   string
    keys_url:                    string
    collaborators_url:           string
    teams_url:                   string
    hooks_url:                   string
    issue_events_url:            string
    events_url:                  string
    assignees_url:               string
    branches_url:                string
    tags_url:                    string
    blobs_url:                   string
    git_tags_url:                string
    git_refs_url:                string
    trees_url:                   string
    statuses_url:                string
    languages_url:               string
    stargazers_url:              string
    contributors_url:            string
    subscribers_url:             string
    subscription_url:            string
    commits_url:                 string
    git_commits_url:             string
    comments_url:                string
    issue_comment_url:           string
    contents_url:                string
    compare_url:                 string
    merges_url:                  string
    archive_url:                 string
    downloads_url:               string
    issues_url:                  string
    pulls_url:                   string
    milestones_url:              string
    notifications_url:           string
    labels_url:                  string
    releases_url:                string
    deployments_url:             string
    created_at:                  Date
    updated_at:                  Date
    pushed_at:                   Date
    git_url:                     string
    ssh_url:                     string
    clone_url:                   string
    svn_url:                     string
    homepage:                    null | string
    size:                        number
    stargazers_count:            number
    watchers_count:              number
    language:                    Language | null
    has_issues:                  boolean
    has_projects:                boolean
    has_downloads:               boolean
    has_wiki:                    boolean
    has_pages:                   boolean
    has_discussions:             boolean
    forks_count:                 number
    mirror_url:                  null
    archived:                    boolean
    disabled:                    boolean
    open_issues_count:           number
    license:                     License | null
    allow_forking:               boolean
    is_template:                 boolean
    web_commit_signoff_required: boolean
    topics:                      string[]
    visibility:                  Visibility
    forks:                       number
    open_issues:                 number
    watchers:                    number
    default_branch:              DefaultBranch
    score:                       number
}

export type DefaultBranch = "master" | "main" | "dev" | "develop"

export type Language = "JavaScript" | "HTML" | "TypeScript" | "CSS"

export type License = {
    key:     string
    name:    string
    spdx_id: string
    url:     null | string
    node_id: string
}

export type Owner = {
    login:               string
    id:                  number
    node_id:             string
    avatar_url:          string
    gravatar_id:         string
    url:                 string
    html_url:            string
    followers_url:       string
    following_url:       string
    gists_url:           string
    starred_url:         string
    subscriptions_url:   string
    organizations_url:   string
    repos_url:           string
    events_url:          string
    received_events_url: string
    type:                Type
    user_view_type:      Visibility
    site_admin:          boolean
}

export type Type = "Organization" | "User"

export type Visibility = "public"

// Converts JSON strings to/from your types
export class Convert {
    public static toGihubAPIResponse(json: string): GihubAPIResponse {
        return JSON.parse(json)
    }

    public static gihubAPIResponseToJson(value: GihubAPIResponse): string {
        return JSON.stringify(value)
    }
}




const a = '1'
const b = 2
const c = a + b
console.log(c)

function divide(a: number, b: number) {
  /* Comentario antes del código, genial !!! */ if (b === 0) throw new Error("division by zero") // rama con tipo `never`
  return a / b // rama con tipo `number`
}


// Edicion de objetos

type Carro = {
  id: {
    readonly saludo: number
    data: {}
  }
}

const carro: Carro = {
  id: {
    saludo: 2,
    data: {}
  }
}

// carro.id.saludo = 3 // error
carro.id = { saludo: 2, data: {} }


// asdf

type tupla = readonly [number, number]
const data: tupla = [1, 2]
// data.push(3)
// esto debería dar un error
// es un fallo de typescript que no arreglan para mantener la retro compatibilidad
// se puede medio solucionar colocando en la definicion del tipo un readonly
// aunque eso hace que la tupla no se pueda editar, util si se guardan colores
// ya definidos pero en casos donde se quiera modificar el contenido no tan bueno
// pero es lo que hay jaja
console.log(data)

// cómo hago un array de tantos arrays como se quiera y digamos todos con string
// y si quiero string number string number ...
// o si quiero string, number, boolean, number, string, number, boolean, number, string, ...


// -- -- Aserciones de tipos -- --

// const canvas = document.getElementById('canvas') as HTMLCanvasElement
// esta aserción hace que TypeScript trate el dato como el tipo HTMLCanvasElement
// así no lo sea, es como decirle a un number que lo trate como string y eso me
// permite el autocompletado para string aunque sea en realidad un número,
// pero esto es TypeScript al compilar a JavaScript va a dar errores porque
// un número no tiene los atributos de string, pero simplemente la aserción
// hace que typescript trate un dato como otro tipo de dato en tiempo de escritura
// de código, en ejecución ya es javascript normal
// HTMLCanvasElement es un valor global de JS funciona como
// clase/constructor del DOM y tambien es un tipo de TypeScript
const canvas = document.getElementById('canvas')
if (canvas instanceof HTMLCanvasElement /* esto es JS */) {
  const ctx = canvas.getContext('2d')
  console.log(ctx)
  /*
  Inferencia, TypeScript se da cuenta que dentro del
  if solo puede estar el HTMLCanvasElement lo deduce
  */
}


// -- -- fetching de datos en TypeScript -- --

const API_URL = 'https://api.github.com/search/repositories?q=javascript'
// https://app.quicktype.io convierte la respuesta de la api a tipos de TypeScript
// TS vanilla es tipado es en tiepo de escritura de código y de compilación
// pero cuando es en ejecución habría que utilizar TypeScrip con validación en ejecución
// o TypeScrip Zod, ambas opciones disponibles en quicktype, en la realidad se utiliza
// mas TypeScript Zod en proyectos nuevos profesionales según la IA Gemini
const res = await fetch(API_URL)
if (!res.ok)
  throw new Error('Request failed')
// const resData = await res.json() as GihubAPIResponse
const resData: GihubAPIResponse = await res.json()
resData.items.map(repo => {
  return {
    name: repo.name,
    id: repo.id,
    url: repo.html_url
  }
})


// -- -- interface and type -- --
/*
 * interface - se puede declarar mas de una vez y se concatena con la definicion anterior
 * type - solo se puede declarar una vez, si son mas da error
 * tienen algunas pequeñas diferencias de sintaxis pero con abmas se puede lograr lo mismo
 * de manera muy parecia, por lo general el codigo de type es mas comodo
 * sin embargo se suele utilizar para declara tipo de clases, no se puede declarar un dato
 * solito, tiene que sí o sí estar dentro de un objeto, entonces es como mas
 * natural que si uno ve interface es porque se esta hablando de una clase de javascript,
 * ahora bien, tipar una clase no tiene tanto sentido porque typescript infiere el tipo
 * de dato de una clase y como solo se declara una vez entonces como que no tiene tanto sentido
 * tipar una clase, si embargo, tiene sentido cuando ese tipo de dato se quiere exportar para
 * utilizarlo en otras partes del codigo, se puede utilizar en una libreria o un modulo
 * interface - export class, si no se exporta es mejor que typescript infiera el tipo, tambien
 * previene de que en caso de modificar la clase debe coincidir con el tipo, y esto da estabilidad
 * al sistema, muy util para hacer testing, si se importara la clase directamente nunca se sabria
 * si cumple los valores deseados, en cambio con el contrato la interface ahí ya debe coincidir y
 * hay mas garantia de seguridad, de que la clase sea lo que se espera, ademas de tener
 * encapsulamiento en tiempo de compilación
 * type - datos en general y objetos literales
 */

/*
 * public → acceso libre (default).
 * private → solo dentro de la clase.
 * protected → dentro de la clase y subclases.
 * readonly → no se puede reasignar después de constructor/declaración.
 * #campo → privado real en JS (runtime), también validado por TS.
 */
interface IEncapsulation {
  a: number          // público
  readonly d: number // solo lectura
  reveal(): (number | undefined)[] // el método es público
}
class Encapsulation implements IEncapsulation {
  public a = 1
  private b = 2
  protected c = 3
  readonly d = 4
  #e = 5

  reveal() {
    return [this.a, this.b, this.c, this.d, this.#e]
  }
}
const encapsulation = new Encapsulation()
console.log(encapsulation.reveal())




// contrato público (interface)
export interface Storage {
  save(key: string, value: string): void
  load(key: string): string | null
}

// implementación real
export class LocalStorage implements Storage {
  save(key: string, value: string) {
    localStorage.setItem(key, value)
  }
  load(key: string) {
    return localStorage.getItem(key)
  }
}

// implementación alternativa (mock para testing)
export class MemoryStorage implements Storage {
  private store: Record<string, string> = {}
  save(key: string, value: string) {
    this.store[key] = value
  }
  load(key: string) {
    return this.store[key] ?? null
  }
}

// servicio desacoplado del storage concreto
export class UserService {
  private storage: Storage

  constructor(storage: Storage) {
    this.storage = storage
  }

  addUser(name: string) {
    this.storage.save("user", name)
  }
}





/*
// storage.ts
export interface Storage {
  save(item: string): void;
  load(key: string): string | null;
}

export class LocalStorage implements Storage {
  save(item: string) { ... }
  load(key: string) { return null; }
}
*/
/*
// service.ts
import { Storage } from "./storage";

export class UserService {
  constructor(private storage: Storage) {}

  addUser(user: string) {
    this.storage.save(user);
  }
}
*/
/*
// test.ts
import { UserService } from "./service";
import { Storage } from "./storage";

class MockStorage implements Storage {
  save(item: string) { guardar en memoria }
  load(key: string) { return "mock"; }
}

const service = new UserService(new MockStorage());
*/
class User {
  #pass = '123'

  setPass = (pass: string) => {
    this.#pass = pass
  }

  savePass = () => {
    console.log(`The pass: ${this.#pass} was saved`)
  }
}
const user = new User()
user.setPass('abc')
// console.log(user.pass) // encapsulamiento real en tiempo de ejecución


function useLessonTwo() {
  const dato = divide(4, 2) // aunque puede dar una excepcion el tipo de dato es number no never
  console.log(dato)
}

export default useLessonTwo
