export const springbootQuizQuestions = [
    // 初心者向け
    {
        question: "Spring Bootで、アプリケーションのエントリーポイントとなるクラスに付けるアノテーションはどれですか？",
        options: ["@SpringBootApplication", "@EnableAutoConfiguration", "@Configuration", "@SpringApplication"],
        answer: "@SpringBootApplication"
    },
    {
        question: "Spring Bootで、RESTful APIを作成するために必要なアノテーションはどれですか？",
        options: ["@RestController", "@Controller", "@Service", "@Repository"],
        answer: "@RestController"
    },
    {
        question: "Spring Bootで、Webアプリケーションの設定を行うための設定クラスに使用するアノテーションはどれですか？",
        options: ["@Configuration", "@Component", "@EnableAutoConfiguration", "@EnableWebMvc"],
        answer: "@Configuration"
    },
    {
        question: "Spring Bootで、依存性注入を行うために使うアノテーションはどれですか？",
        options: ["@Autowired", "@Inject", "@Value", "@Component"],
        answer: "@Autowired"
    },
    {
        question: "Spring Bootで、外部設定ファイル（application.properties）からプロパティ値を読み込むために使うアノテーションはどれですか？",
        options: ["@Value", "@ConfigurationProperties", "@PropertySource", "@Component"],
        answer: "@Value"
    },
    {
        question: "Spring Bootで、アプリケーションを起動するために使うメインメソッドの構文はどれですか？",
        options: ["SpringApplication.run(Application.class, args);", "Application.run(SpringApplication.class, args);", "new SpringApplication(Application.class);", "runApplication(Application.class);"],
        answer: "SpringApplication.run(Application.class, args);"
    },
    {
        question: "Spring Bootで、リクエストのパスをマッピングするために使うアノテーションはどれですか？",
        options: ["@RequestMapping", "@PathVariable", "@GetMapping", "@PostMapping"],
        answer: "@RequestMapping"
    },
    {
        question: "Spring Bootで、HTTPリクエストのパラメータをメソッドの引数として受け取るために使うアノテーションはどれですか？",
        options: ["@RequestParam", "@RequestBody", "@PathVariable", "@RequestHeader"],
        answer: "@RequestParam"
    },

    // 中級者向け
    {
        question: "Spring Bootで、データベース接続を管理するために使われるアノテーションはどれですか？",
        options: ["@Entity", "@Repository", "@Service", "@Transactional"],
        answer: "@Repository"
    },
    {
        question: "Spring Bootで、非同期処理を実行するために使用するアノテーションはどれですか？",
        options: ["@Async", "@Scheduled", "@EnableAsync", "@EnableScheduling"],
        answer: "@Async"
    },
    {
        question: "Spring Bootで、REST APIのレスポンスをJSON形式に変換するために使うアノテーションはどれですか？",
        options: ["@ResponseBody", "@RequestBody", "@JsonResponse", "@ResponseEntity"],
        answer: "@ResponseBody"
    },
    {
        question: "Spring Bootで、異常が発生した場合にエラーハンドリングを行うために使うアノテーションはどれですか？",
        options: ["@ExceptionHandler", "@ControllerAdvice", "@RestControllerAdvice", "@ErrorController"],
        answer: "@ExceptionHandler"
    },
    {
        question: "Spring Bootで、指定した時間間隔でメソッドを定期的に実行するために使うアノテーションはどれですか？",
        options: ["@Scheduled", "@Async", "@EnableScheduling", "@ScheduledAt"],
        answer: "@Scheduled"
    },
    {
        question: "Spring Bootで、特定の条件でリクエストをフィルタリングするために使用するのはどれですか？",
        options: ["@Filter", "@RequestFilter", "@WebFilter", "@Component"],
        answer: "@WebFilter"
    },
    {
        question: "Spring Bootで、データベースからデータを取得するために使用するインタフェースはどれですか？",
        options: ["JpaRepository", "JdbcRepository", "CrudRepository", "MongoRepository"],
        answer: "JpaRepository"
    },

    // 上級者向け
    {
        question: "Spring Bootで、セキュリティを設定するために使用するクラスはどれですか？",
        options: ["SecurityConfig", "WebSecurityConfigurerAdapter", "SecurityConfigurer", "SecurityManager"],
        answer: "WebSecurityConfigurerAdapter"
    },
    {
        question: "Spring Bootで、リクエスト前に認証を要求するための設定を行うメソッドはどれですか？",
        options: ["http.authorizeRequests()", "http.configureRequests()", "http.filters()", "http.security()"],
        answer: "http.authorizeRequests()"
    },
    {
        question: "Spring Bootで、マイクロサービス間でメッセージを送受信するために使われるメッセージングフレームワークはどれですか？",
        options: ["RabbitMQ", "Kafka", "JMS", "WebSocket"],
        answer: "RabbitMQ"
    },
    {
        question: "Spring Bootで、エラーページのカスタマイズを行うために使用するクラスはどれですか？",
        options: ["ErrorController", "ErrorPageController", "CustomErrorHandler", "ExceptionHandler"],
        answer: "ErrorController"
    },
    {
        question: "Spring Bootで、HTTPリクエストのレスポンスをカスタマイズするために使用するメソッドはどれですか？",
        options: ["ResponseEntity.ok()", "ResponseEntity.builder()", "ResponseEntity.status()", "ResponseEntity.create()"],
        answer: "ResponseEntity.ok()"
    },
    {
        question: "Spring Bootで、外部APIにリクエストを送る際に使うクラスはどれですか？",
        options: ["RestTemplate", "HttpClient", "HttpURLConnection", "WebClient"],
        answer: "RestTemplate"
    },
    {
        question: "Spring Bootで、トランザクションの管理を行うために使うアノテーションはどれですか？",
        options: ["@Transactional", "@Transaction", "@Commit", "@Rollback"],
        answer: "@Transactional"
    },
    {
        question: "Spring Bootで、Spring Securityを使用してユーザー認証を行うために必要なインタフェースはどれですか？",
        options: ["UserDetailsService", "AuthenticationManager", "AuthenticationProvider", "UserService"],
        answer: "UserDetailsService"
    },
    {
        question: "Spring Bootで、データのバリデーションを行うために使うアノテーションはどれですか？",
        options: ["@Valid", "@NotNull", "@Validated", "@Validate"],
        answer: "@Valid"
    }
];
