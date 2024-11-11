export const jspservletQuizQuestions = [
    // 初心者向け
    {
        question: "JSPページを作成する際、拡張子は何にする必要がありますか？",
        options: [".jsp", ".html", ".java", ".servlet"],
        answer: ".jsp"
    },
    {
        question: "JSPで静的なコンテンツを表示するために使用するタグはどれですか？",
        options: ["<%= %>", "<jsp:include>", "<html>", "<% out.print() %>"],
        answer: "<% out.print() %>"
    },
    {
        question: "JSPでサーバーサイドでの処理結果を出力するために使用するスクリプトレットの構文はどれですか？",
        options: ["<%= %>", "<jsp:out>", "<jsp:expression>", "<%= out.print() %>"],
        answer: "<%= %>"
    },
    {
        question: "Servletクラスを作成するために必須のメソッドはどれですか？",
        options: ["doGet()", "init()", "service()", "doPost()"],
        answer: "doGet()"
    },
    {
        question: "JSPファイルでサーバーサイドのコードを埋め込むために使うタグはどれですか？",
        options: ["<script>", "<%", "<jsp:body>", "<%-- %>"],
        answer: "<%"
    },
    {
        question: "JSPファイルでリクエストパラメータを取得する方法はどれですか？",
        options: ["request.getParameter()", "request.getAttribute()", "response.getParameter()", "session.getParameter()"],
        answer: "request.getParameter()"
    },
    {
        question: "JSPでHTMLフォームのデータを送信するために使用するHTTPメソッドはどれですか？",
        options: ["GET", "POST", "PUT", "DELETE"],
        answer: "POST"
    },
    {
        question: "Servletクラスでリクエストを処理するために使用するメソッドはどれですか？",
        options: ["doGet()", "handleRequest()", "service()", "processRequest()"],
        answer: "doGet()"
    },

    // 中級者向け
    {
        question: "JSPで他のJSPページをインクルードするために使うタグはどれですか？",
        options: ["<jsp:include>", "<jsp:forward>", "<% include %>", "<jsp:useBean>"],
        answer: "<jsp:include>"
    },
    {
        question: "Servletでリクエストパラメータを取得するために使うメソッドはどれですか？",
        options: ["getParameter()", "getAttribute()", "getHeader()", "getSession()"],
        answer: "getParameter()"
    },
    {
        question: "JSPのEL（Expression Language）でリクエスト属性を参照する式はどれですか？",
        options: ["${param.name}", "${request.name}", "${request.getParameter()}", "${requestAttribute}"],
        answer: "${param.name}"
    },
    {
        question: "Servletでセッションを取得するために使用するメソッドはどれですか？",
        options: ["request.getSession()", "request.getAttribute()", "response.getSession()", "session.getAttribute()"],
        answer: "request.getSession()"
    },
    {
        question: "JSPでセッションを無効にするために使用するメソッドはどれですか？",
        options: ["session.invalidate()", "session.remove()", "session.destroy()", "session.close()"],
        answer: "session.invalidate()"
    },
    {
        question: "JSPのタグライブラリ（JSTL）で条件分岐を行うタグはどれですか？",
        options: ["<c:choose>", "<c:if>", "<jsp:if>", "<if>"],
        answer: "<c:choose>"
    },
    {
        question: "Servletでリダイレクトを行うために使用するメソッドはどれですか？",
        options: ["response.sendRedirect()", "request.redirect()", "request.setAttribute()", "response.setHeader()"],
        answer: "response.sendRedirect()"
    },
    {
        question: "JSPファイルにおいて、セッションの情報を格納するために使うオブジェクトはどれですか？",
        options: ["session", "request", "response", "application"],
        answer: "session"
    },

    // 上級者向け
    {
        question: "Servletでリクエストのパラメータを取得した後、レスポンスをクライアントに送信するために使うメソッドはどれですか？",
        options: ["response.getWriter().write()", "response.sendRedirect()", "response.sendError()", "response.getOutputStream().flush()"],
        answer: "response.getWriter().write()"
    },
    {
        question: "JSPでビューとコントローラーの役割を分けるために使用するパターンはどれですか？",
        options: ["MVC", "DAO", "Singleton", "Factory"],
        answer: "MVC"
    },
    {
        question: "Servletのセッション管理において、ユーザー情報をセッションに格納するためのメソッドはどれですか？",
        options: ["session.setAttribute()", "session.setUser()", "session.setSessionData()", "request.setSession()"],
        answer: "session.setAttribute()"
    },
    {
        question: "JSPでエラーページを設定するために使用するディレクティブはどれですか？",
        options: ["<%@ page errorPage=\"error.jsp\" %>", "<%@ page contentType=\"text/html\" %>", "<%@ include file=\"header.jsp\" %>", "<%@ taglib uri=\"http://java.sun.com/jsp/jstl/core\" prefix=\"c\" %>"],
        answer: "<%@ page errorPage=\"error.jsp\" %>"
    },
    {
        question: "JSPでBeanを使用するために使用するタグはどれですか？",
        options: ["<jsp:useBean>", "<jsp:setProperty>", "<jsp:getProperty>", "<jsp:include>"],
        answer: "<jsp:useBean>"
    },
    {
        question: "Servletでリクエストのメソッドタイプ（GET、POSTなど）を取得するために使用するメソッドはどれですか？",
        options: ["request.getMethod()", "request.getType()", "request.getHttpMethod()", "request.getRequestType()"],
        answer: "request.getMethod()"
    },
    {
        question: "JSPでサーブレットのURLパターンに基づいてページをフォワードするために使用するタグはどれですか？",
        options: ["<jsp:forward>", "<jsp:include>", "<jsp:useBean>", "<jsp:param>"],
        answer: "<jsp:forward>"
    },
    {
        question: "JSPでセッションを利用する際に、セッションIDを取得するために使用するメソッドはどれですか？",
        options: ["session.getId()", "session.getSessionID()", "request.getSessionID()", "request.getId()"],
        answer: "session.getId()"
    },
    {
        question: "ServletでリクエストがPOSTメソッドで送信されたことを確認する条件はどれですか？",
        options: ["request.getMethod().equalsIgnoreCase(\"POST\")", "request.isPost()", "request.method() == POST", "request.getMethod().equals(\"POST\")"],
        answer: "request.getMethod().equalsIgnoreCase(\"POST\")"
    }
];
