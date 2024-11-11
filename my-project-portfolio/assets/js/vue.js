export const vueQuizQuestions = [
    // 初心者向け
    {
        question: "Vue.jsで、コンポーネントを作成する際に使用する構文はどれですか？",
        options: ["Vue.component('component-name', {...});", "createComponent('component-name', {...});", "new Vue('component-name', {...});", "Vue.create('component-name', {...});"],
        answer: "Vue.component('component-name', {...});"
    },
    {
        question: "Vue.jsのデータバインディングで、HTML要素にデータを埋め込むために使用する構文はどれですか？",
        options: ["{{ data }}", "[data]", "{ data }", "(data)"],
        answer: "{{ data }}"
    },
    {
        question: "Vue.jsで、コンポーネント間のデータの受け渡しに使用するのはどれですか？",
        options: ["props", "data", "methods", "computed"],
        answer: "props"
    },
    {
        question: "Vue.jsで、ユーザーがクリックした際に呼ばれるメソッドを指定するにはどのディレクティブを使いますか？",
        options: ["v-on:click", "v-bind:click", "v-click", "v-event:click"],
        answer: "v-on:click"
    },
    {
        question: "Vue.jsで、動的にクラスをバインディングするために使用するディレクティブはどれですか？",
        options: ["v-bind:class", "v-class", "v-bind:style", "v-style"],
        answer: "v-bind:class"
    },
    {
        question: "Vue.jsでコンポーネントのライフサイクルフックの1つで、コンポーネントが作成された後に呼ばれるものはどれですか？",
        options: ["created", "mounted", "updated", "destroyed"],
        answer: "created"
    },
    {
        question: "Vue.jsで、双方向データバインディングを実現するディレクティブはどれですか？",
        options: ["v-model", "v-bind", "v-if", "v-for"],
        answer: "v-model"
    },
    {
        question: "Vue.jsのイベントハンドラーで、引数を渡すにはどのように記述しますか？",
        options: ["v-on:click='method(arg)'", "v-click='method(arg)'", "v-bind:click='method(arg)'", "on:click='method(arg)'"],
        answer: "v-on:click='method(arg)'"
    },
    
    // 中級者向け
    {
        question: "Vue.jsで、コンポーネント間でイベントを通信する方法として最も適切なものはどれですか？",
        options: ["$emit", "$broadcast", "$dispatch", "$on"],
        answer: "$emit"
    },
    {
        question: "Vue.jsで、親コンポーネントから子コンポーネントにデータを渡す際に使うのはどれですか？",
        options: ["props", "events", "methods", "data"],
        answer: "props"
    },
    {
        question: "Vue.jsで、computedプロパティを使って、データに基づいて計算した値を取得する方法はどれですか？",
        options: ["computed: { result: function() {...} }", "methods: { result: function() {...} }", "data: { result: function() {...} }", "watch: { result: function() {...} }"],
        answer: "computed: { result: function() {...} }"
    },
    {
        question: "Vue.jsで、データの変更を追跡するために使用するのはどれですか？",
        options: ["watch", "computed", "methods", "data"],
        answer: "watch"
    },
    {
        question: "Vue.jsで、非同期操作を行うために使用するライフサイクルフックはどれですか？",
        options: ["created", "mounted", "updated", "destroyed"],
        answer: "mounted"
    },
    {
        question: "Vue.jsで、条件に基づいて要素の表示・非表示を制御するディレクティブはどれですか？",
        options: ["v-if", "v-for", "v-show", "v-bind"],
        answer: "v-if"
    },
    {
        question: "Vue.jsで、フォーム要素のバリデーションを行うために使用するディレクティブはどれですか？",
        options: ["v-model", "v-bind", "v-validation", "v-bind:form"],
        answer: "v-model"
    },
    {
        question: "Vue.jsで、非同期リクエストを送信するために使うライブラリはどれですか？",
        options: ["axios", "vue-http", "fetch", "jquery"],
        answer: "axios"
    },

    // 上級者向け
    {
        question: "Vue.jsで、動的コンポーネントを利用する際に使うディレクティブはどれですか？",
        options: ["v-bind:is", "v-dynamic", "v-component", "v-for"],
        answer: "v-bind:is"
    },
    {
        question: "Vue.jsで、コンポーネントのインスタンスを参照するために使うプロパティはどれですか？",
        options: ["$refs", "$children", "$parent", "$root"],
        answer: "$refs"
    },
    {
        question: "Vue.jsのVuexにおけるステート管理で、データの変更を行うにはどのようなメソッドを使用しますか？",
        options: ["mutations", "actions", "getters", "state"],
        answer: "mutations"
    },
    {
        question: "Vue.jsで、コンポーネントの非同期データを取得するために最適なライフサイクルフックはどれですか？",
        options: ["created", "mounted", "beforeCreate", "beforeMount"],
        answer: "mounted"
    },
    {
        question: "Vue.jsで、コンポーネント間で状態を共有するために使われるライブラリはどれですか？",
        options: ["Vuex", "Vue-router", "Vue-resource", "Vue-axios"],
        answer: "Vuex"
    },
    {
        question: "Vue.jsで、ルートガードを定義して、特定のルートへのアクセスを制限するために使うのはどれですか？",
        options: ["beforeEach", "beforeRouteEnter", "beforeRouteUpdate", "beforeRouteLeave"],
        answer: "beforeEach"
    },
    {
        question: "Vue.jsで、フォームのリセットを行うために使用するメソッドはどれですか？",
        options: ["this.$refs.form.reset()", "this.$refs.form.clear()", "this.$form.reset()", "this.$form.clear()"],
        answer: "this.$refs.form.reset()"
    },
    {
        question: "Vue.jsで、非同期にデータをフェッチして状態を更新するために使用されるメソッドはどれですか？",
        options: ["actions", "mutations", "getters", "computed"],
        answer: "actions"
    },
    {
        question: "Vue.jsで、親コンポーネントが子コンポーネントのメソッドを呼び出すために使うものはどれですか？",
        options: ["$refs", "$emit", "$parent", "$children"],
        answer: "$refs"
    }
];
