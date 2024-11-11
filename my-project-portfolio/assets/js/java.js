export const javaQuizQuestions = [
    // 初心者向け
    {
        question: "Javaの変数宣言で、整数型の変数を宣言するにはどのデータ型を使いますか？",
        options: ["int", "string", "double", "char"],
        answer: "int"
    },
    {
        question: "Javaの文字列を扱うクラスはどれですか？",
        options: ["String", "Char", "StringBuilder", "Character"],
        answer: "String"
    },
    {
        question: "Javaのメソッドで、返り値を指定しない場合に使うキーワードは何ですか？",
        options: ["void", "return", "empty", "null"],
        answer: "void"
    },
    {
        question: "Javaで条件分岐を行う際に使う制御文は何ですか？",
        options: ["if", "for", "switch", "case"],
        answer: "if"
    },
    {
        question: "Javaで繰り返し処理を行う際に使う制御文は何ですか？",
        options: ["loop", "for", "while", "foreach"],
        answer: "for"
    },
    {
        question: "Javaで配列を宣言する際に使うキーワードは何ですか？",
        options: ["array", "int[]", "list", "set"],
        answer: "int[]"
    },
    {
        question: "Javaで例外を処理するために使うキーワードは何ですか？",
        options: ["try-catch", "throw", "finally", "exception"],
        answer: "try-catch"
    },
    {
        question: "Javaのオブジェクト指向において、クラスからインスタンスを作成するために使うキーワードは何ですか？",
        options: ["new", "instance", "create", "object"],
        answer: "new"
    },

    // 中級者向け
    {
        question: "Javaで文字列の長さを取得するメソッドは何ですか？",
        options: ["length()", "size()", "getLength()", "count()"],
        answer: "length()"
    },
    {
        question: "Javaでクラスを継承するために使うキーワードは何ですか？",
        options: ["extends", "implements", "inherits", "super"],
        answer: "extends"
    },
    {
        question: "Javaのインターフェースを実装するために使うキーワードは何ですか？",
        options: ["extends", "implements", "interface", "abstract"],
        answer: "implements"
    },
    {
        question: "Javaでポリモーフィズムを実現するために使う概念はどれですか？",
        options: ["継承", "カプセル化", "オーバーライド", "インターフェース"],
        answer: "オーバーライド"
    },
    {
        question: "Javaでオブジェクトを比較するために使用するメソッドは何ですか？",
        options: ["equals()", "compare()", "compareTo()", "=="],
        answer: "equals()"
    },
    {
        question: "Javaでスレッドを作成する方法はどれですか？",
        options: ["Thread class", "Runnable interface", "Executor class", "Task interface"],
        answer: "Thread class"
    },
    {
        question: "Javaでコレクションの要素を並べ替えるために使用するクラスは何ですか？",
        options: ["Collections", "ArrayList", "HashMap", "Comparator"],
        answer: "Collections"
    },
    {
        question: "Javaでファイル操作を行うために使用するクラスはどれですか？",
        options: ["File", "FileReader", "BufferedReader", "IOException"],
        answer: "File"

    },

    // 上級者向け
    {
        question: "Javaで無名クラス（匿名クラス）を作成するために使うキーワードは何ですか？",
        options: ["new", "interface", "class", "lambda"],
        answer: "new"
    },
    {
        question: "Javaでラムダ式を使う際に導入するインターフェースの条件は何ですか？",
        options: ["1つの抽象メソッドを持つ", "多くの抽象メソッドを持つ", "インスタンス化されていない", "finalである"],
        answer: "1つの抽象メソッドを持つ"
    },
    {
        question: "Javaでパフォーマンスを改善するために使うスレッドプールを管理するクラスはどれですか？",
        options: ["ThreadPoolExecutor", "ExecutorService", "Executor", "ThreadManager"],
        answer: "ExecutorService"
    },
    {
        question: "Javaでメモリ管理を行うために使用される自動化された仕組みは何ですか？",
        options: ["ガーベジコレクション", "メモリリーク", "スレッドプール", "メモリ最適化"],
        answer: "ガーベジコレクション"
    },
    {
        question: "JavaでストリームAPIを使ってコレクションをフィルタリングするメソッドは何ですか？",
        options: ["filter()", "map()", "collect()", "reduce()"],
        answer: "filter()"
    },
    {
        question: "Javaでデータベースとの接続を行うために使用するAPIは何ですか？",
        options: ["JDBC", "JPA", "Hibernate", "SQL"],
        answer: "JDBC"
    },
    {
        question: "JavaでファイルI/Oを非同期に行うために使うクラスは何ですか？",
        options: ["NIO", "FileReader", "BufferedReader", "Scanner"],
        answer: "NIO"
    },
    {
        question: "Javaで遅延初期化を行うために使うキーワードは何ですか？",
        options: ["volatile", "synchronized", "lazy", "final"],
        answer: "volatile"
    },
    {
        question: "Javaでメソッドチェーンを実現するための概念は何ですか？",
        options: ["メソッドの返り値に自分自身を返す", "静的メソッドを使用する", "オーバーロードを使用する", "変数の初期化を遅延させる"],
        answer: "メソッドの返り値に自分自身を返す"
    },
    {
        question: "Javaでトランザクション管理を行うために使用するクラスはどれですか？",
        options: ["Transaction", "Session", "Connection", "EntityManager"],
        answer: "Connection"
    }
];
