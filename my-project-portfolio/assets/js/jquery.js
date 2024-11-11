export const jqueryQuizQuestions = [
    // 初心者向け
    {
        question: "jQueryでDOM要素を取得するために使うメソッドはどれですか？",
        options: ["$('#id')", "$('id')", "getElementById()", "document.querySelector()"],
        answer: "$('#id')"
    },
    {
        question: "jQueryでイベントをバインドするために使うメソッドはどれですか？",
        options: ["bind()", "on()", "addEventListener()", "click()"],
        answer: "on()"
    },
    {
        question: "jQueryで要素を非表示にするために使うメソッドはどれですか？",
        options: ["hide()", "display()", "none()", "invisible()"],
        answer: "hide()"
    },
    {
        question: "jQueryで要素を表示するために使うメソッドはどれですか？",
        options: ["show()", "visible()", "display()", "reveal()"],
        answer: "show()"
    },
    {
        question: "jQueryでクラスを追加するために使うメソッドはどれですか？",
        options: ["addClass()", "appendClass()", "setClass()", "insertClass()"],
        answer: "addClass()"
    },
    {
        question: "jQueryで要素を削除するために使うメソッドはどれですか？",
        options: ["remove()", "delete()", "detach()", "clear()"],
        answer: "remove()"
    },
    {
        question: "jQueryで要素の属性値を取得または設定するために使うメソッドはどれですか？",
        options: ["attr()", "setAttribute()", "getAttribute()", "property()"],
        answer: "attr()"
    },
    {
        question: "jQueryでAJAXリクエストを送信するために使うメソッドはどれですか？",
        options: ["$.ajax()", "$.get()", "$.post()", "$.fetch()"],
        answer: "$.ajax()"
    },

    // 中級者向け
    {
        question: "jQueryでHTMLコンテンツを動的に挿入するために使うメソッドはどれですか？",
        options: ["append()", "insert()", "add()", "html()"],
        answer: "append()"
    },
    {
        question: "jQueryでDOM要素のスタイルを変更するために使うメソッドはどれですか？",
        options: ["css()", "style()", "setStyle()", "styles()"],
        answer: "css()"
    },
    {
        question: "jQueryで要素をフェードインさせるために使うメソッドはどれですか？",
        options: ["fadeIn()", "show()", "slideDown()", "reveal()"],
        answer: "fadeIn()"
    },
    {
        question: "jQueryで要素をフェードアウトさせるために使うメソッドはどれですか？",
        options: ["fadeOut()", "hide()", "slideUp()", "disappear()"],
        answer: "fadeOut()"
    },
    {
        question: "jQueryで複数のイベントを同時にバインドするために使うメソッドはどれですか？",
        options: ["on()", "bind()", "trigger()", "delegate()"],
        answer: "on()"
    },
    {
        question: "jQueryで要素を移動させるために使うメソッドはどれですか？",
        options: ["animate()", "move()", "position()", "slide()"],
        answer: "animate()"
    },
    {
        question: "jQueryでDOM要素の高さを取得または設定するために使うメソッドはどれですか？",
        options: ["height()", "size()", "offsetHeight()", "setHeight()"],
        answer: "height()"
    },
    {
        question: "jQueryで親要素を取得するために使うメソッドはどれですか？",
        options: ["parent()", "children()", "ancestor()", "getParent()"],
        answer: "parent()"
    },

    // 上級者向け
    {
        question: "jQueryで非同期的にコンテンツをロードするために使用するメソッドはどれですか？",
        options: ["$.load()", "$.ajax()", "$.get()", "$.post()"],
        answer: "$.load()"
    },
    {
        question: "jQueryでDOM要素を選択し、親要素にイベントを委譲するために使うメソッドはどれですか？",
        options: ["delegate()", "bind()", "on()", "trigger()"],
        answer: "delegate()"
    },
    {
        question: "jQueryでチェーンメソッドを使用する際、どのメソッドを使うべきですか？",
        options: ["各メソッドが自分自身を返す", "メソッドの順番に依存する", "1つのメソッドにのみ依存する", "メソッドを非同期に使う"],
        answer: "各メソッドが自分自身を返す"
    },
    {
        question: "jQueryで複数のクラスを同時に追加するために使用するメソッドはどれですか？",
        options: ["addClass()", "setClass()", "appendClass()", "addClasses()"],
        answer: "addClass()"
    },
    {
        question: "jQueryでクエリ文字列をURLに追加するために使うメソッドはどれですか？",
        options: ["$.param()", "$.url()", "$.query()", "$.data()"],
        answer: "$.param()"
    },
    {
        question: "jQueryでDOM要素が変更された後に何かを実行するために使うメソッドはどれですか？",
        options: ["$.ready()", "onChange()", "change()", "trigger()"],
        answer: "change()"
    },
    {
        question: "jQueryでAJAXのリクエストを送信した後の処理を記述するために使うメソッドはどれですか？",
        options: ["done()", "then()", "success()", "complete()"],
        answer: "done()"
    },
    {
        question: "jQueryで、DOM要素が特定の属性を持っているかを確認するために使うメソッドはどれですか？",
        options: ["hasClass()", "hasAttr()", "attr()", "is()"],
        answer: "hasClass()"
    },
    {
        question: "jQueryでリモートサーバーからJSONデータを非同期に取得するために使うメソッドはどれですか？",
        options: ["$.getJSON()", "$.ajax()", "$.load()", "$.get()"],
        answer: "$.getJSON()"
    },
    {
        question: "jQueryで要素がクリックされたときに他の要素を操作するために使用するメソッドはどれですか？",
        options: ["click()", "on()", "trigger()", "bind()"],
        answer: "click()"
    }
];
