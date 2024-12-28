// Open the language modal
document.getElementById("languageBtn").onclick = function() {
    document.getElementById("languageModal").style.display = "block";
}

// Close the language modal when clicking the close button
document.getElementById("closeBtn").onclick = function() {
    document.getElementById("languageModal").style.display = "none";
}

// Change language function to set texts
function changeLanguage(language) {
    var translations = {
        "en": {
            "introHeader": "Introduction",
            "introText": "Thank you for choosing our <strong>Queen's Rush</strong>. This Privacy Policy explains the way we handle your information when you use our game. Your privacy is important to us, and we ensure no personal data is collected or shared. We operate under strict standards to ensure that your game experience remains safe and enjoyable.",
            "infoHeader": "Information We Collect",
            "infoText": "As the game is entirely offline and does not collect or store any personal information, we do not collect, use, or share any personal data. The game does not require any internet connection to play. Therefore, there is no collection of personally identifiable information from players.",
            "adsHeader": "Ads",
            "adsText": "We may serve ads in the game via Google Ads or Unity Ads. These ads are displayed to support the development of the game. Google or Unity may collect and use your information based on their respective privacy policies. However, we do not collect or have access to any personal information through ads.",
            "securityHeader": "Data Security",
            "securityText": "Since we do not store any personal information, there are no data security concerns related to user data in this game. However, we ensure that all in-game features and ads follow industry best practices and do not compromise your privacy.",
            "changesHeader": "Changes to the Privacy Policy",
            "changesText": "We may update this Privacy Policy from time to time. Any changes will be reflected in this document. We recommend checking this policy regularly to stay informed about how we protect your privacy. The latest version of this Privacy Policy will always be available on this page.",
            "contactHeader": "Contact Us",
            "contactText": "If you have any questions about this Privacy Policy or would like to contact us regarding privacy matters, please reach out to us at: "
        },
        "fr": {
            "introHeader": "Introduction",
            "introText": "Merci d'avoir choisi notre <strong>Queen's Rush</strong>. Cette politique de confidentialité explique la manière dont nous traitons vos informations lorsque vous utilisez notre jeu. Votre vie privée est importante pour nous et nous veillons à ce qu'aucune donnée personnelle ne soit collectée ou partagée. Nous opérons selon des normes strictes pour garantir que votre expérience de jeu reste sûre et agréable.",
            "infoHeader": "Informations que nous collectons",
            "infoText": "Comme le jeu est entièrement hors ligne et ne collecte ni ne stocke aucune information personnelle, nous ne collectons, n'utilisons ni ne partageons aucune donnée personnelle. Le jeu ne nécessite aucune connexion Internet pour jouer. Par conséquent, aucune information personnelle identifiable n’est collectée auprès des joueurs.",
            "adsHeader": "Publicités",
            "adsText": "Nous pouvons diffuser des publicités dans le jeu via Google Ads ou Unity Ads. Ces publicités sont affichées pour soutenir le développement du jeu. Google ou Unity peuvent collecter et utiliser vos informations sur la base de leurs politiques de confidentialité respectives. Cependant, nous ne collectons ni n’avons accès à aucune information personnelle via des publicités.",
            "securityHeader": "Sécurité des données",
            "securityText": "Étant donné que nous ne stockons aucune information personnelle, il n'y a aucun problème de sécurité des données lié aux données utilisateur dans ce jeu. Cependant, nous veillons à ce que toutes les fonctionnalités et publicités du jeu suivent les meilleures pratiques du secteur et ne compromettent pas votre vie privée.",
            "changesHeader": "Modifications de la politique de confidentialité",
            "changesText": "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera reflétée dans ce document. Nous vous recommandons de vérifier régulièrement cette politique pour rester informé sur la manière dont nous protégeons votre vie privée. La dernière version de cette politique de confidentialité sera toujours disponible sur cette page.",
            "contactHeader": "Contactez-nous",
            "contactText": "Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez nous contacter concernant des questions de confidentialité, veuillez nous contacter à :"
        },
        "es": {
            "introHeader": "Introducción",
            "introText": "Gracias por elegir nuestro <strong>Queen's Rush</strong>. Esta Política de Privacidad explica la manera en que manejamos su información cuando utiliza nuestro juego. Su privacidad es importante para nosotros, y aseguramos que no se recopilan ni comparten datos personales. Operamos bajo estrictos estándares para garantizar que su experiencia de juego sea segura y agradable.",
            "infoHeader": "Información que recopilamos",
            "infoText": "Dado que el juego es completamente fuera de línea y no recopila ni almacena información personal, no recopilamos, usamos ni compartimos datos personales. El juego no requiere conexión a Internet para jugar, por lo que no recopila información de forma alguna mientras se juega. Tampoco requerimos ningún permiso que pueda acceder a su información personal ni a datos en segundo plano. En resumen, no recopilamos ni compartimos datos personales.",
            "adsHeader": "Anuncios",
            "adsText": "Podemos mostrar anuncios en el juego a través de Google Ads o Unity Ads. Estos anuncios se muestran para apoyar el desarrollo del juego. Google o Unity pueden recopilar y utilizar su información según sus respectivas políticas de privacidad. Sin embargo, no recopilamos ni tenemos acceso a ninguna información personal a través de los anuncios. Solo mostramos anuncios relevantes para los usuarios de manera no intrusiva, con el objetivo de mantener el juego gratuito.",
            "securityHeader": "Seguridad de los datos",
            "securityText": "Dado que no almacenamos ninguna información personal, no hay problemas de seguridad de datos relacionados con los datos de los usuarios en este juego. Sin embargo, nos aseguramos de que todas las funciones del juego y los anuncios sigan las mejores prácticas de la industria para garantizar que su privacidad esté protegida en todo momento. Implementamos medidas de seguridad estándar para evitar cualquier acceso no autorizado, alteración o divulgación de los datos.",
            "changesHeader": "Cambios en la política de privacidad",
            "changesText": "Podemos actualizar esta Política de Privacidad de vez en cuando. Cualquier cambio se reflejará en este documento. Le recomendamos consultar esta política regularmente para estar informado sobre cómo protegemos su privacidad. Si se realizan cambios sustanciales, notificaremos a los usuarios a través de una notificación dentro de la aplicación o en la página de actualización de la política de privacidad.",
            "contactHeader": "Contáctenos",
            "contactText": "Si tiene alguna pregunta sobre esta Política de Privacidad o desea contactarnos sobre asuntos de privacidad, puede enviarnos un correo electrónico a los siguientes contactos: "
            },
        "de": {
            "introHeader": "Einführung",
            "introText": "Vielen Dank, dass Sie sich für <strong>Queen's Rush</strong> entschieden haben. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen behandeln, wenn Sie unser Spiel verwenden. Ihre Privatsphäre ist uns wichtig, und wir stellen sicher, dass keine persönlichen Daten gesammelt oder weitergegeben werden. Wir betreiben das Spiel unter strengen Standards, um sicherzustellen, dass Ihr Spielerlebnis sicher und angenehm ist.",
            "infoHeader": "Gesammelte Informationen",
            "infoText": "Da das Spiel vollständig offline ist und keine persönlichen Informationen sammelt oder speichert, sammeln, verwenden oder teilen wir keine persönlichen Daten. Das Spiel erfordert keine Internetverbindung, um zu spielen, und wir greifen nicht auf Ihre privaten Daten zu. Es gibt keine Anfrage nach Berechtigungen, die auf Ihre persönlichen Informationen zugreifen könnten, noch werden im Hintergrund Daten gesammelt. Zusammengefasst: Wir sammeln oder teilen keine persönlichen Daten.",
            "adsHeader": "Anzeigen",
            "adsText": "Wir können im Spiel Anzeigen über Google Ads oder Unity Ads schalten. Diese Anzeigen werden zur Unterstützung der Entwicklung des Spiels angezeigt. Google oder Unity können Ihre Informationen basierend auf ihren jeweiligen Datenschutzrichtlinien sammeln und verwenden. Wir jedoch sammeln keine persönlichen Daten über die Anzeigen. Wir zeigen Anzeigen auf eine Art und Weise, die nicht aufdringlich ist, und unterstützen damit das kostenlose Modell des Spiels.",
            "securityHeader": "Datensicherheit",
            "securityText": "Da wir keine persönlichen Informationen speichern, gibt es keine Sicherheitsbedenken im Zusammenhang mit Benutzerdaten in diesem Spiel. Allerdings stellen wir sicher, dass alle Spielfunktionen und Anzeigen den besten Praktiken der Branche entsprechen und Ihre Privatsphäre geschützt bleibt. Wir haben Sicherheitsvorkehrungen getroffen, um den unbefugten Zugriff auf oder die Veränderung von Benutzerdaten zu verhindern.",
            "changesHeader": "Änderungen der Datenschutzrichtlinie",
            "changesText": "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Alle Änderungen werden in diesem Dokument widerspiegelt. Wir empfehlen, diese Richtlinie regelmäßig zu überprüfen, um informiert zu bleiben, wie wir Ihre Privatsphäre schützen. Wenn wesentliche Änderungen vorgenommen werden, informieren wir die Nutzer durch eine Benachrichtigung in der App oder auf der Seite der Datenschutzrichtlinie.",
            "contactHeader": "Kontaktieren Sie uns",
            "contactText": "Wenn Sie Fragen zu dieser Datenschutzerklärung haben oder sich bezüglich Datenschutzanfragen an uns wenden möchten, können Sie uns unter den folgenden Kontaktmöglichkeiten erreichen:"
        },
            "it": {
            "introHeader": "Introduzione",
            "introText": "Grazie per aver scelto il nostro <strong>Queen's Rush</strong>. Questa Informativa sulla privacy spiega come trattiamo le tue informazioni quando utilizzi il nostro gioco. La tua privacy è importante per noi, e ci impegniamo a garantire che non vengano raccolte né condivise informazioni personali. Operiamo sotto standard rigorosi per garantire che la tua esperienza di gioco sia sicura e piacevole.",
            "infoHeader": "Informazioni che raccogliamo",
            "infoText": "Poiché il gioco è completamente offline e non raccoglie né memorizza informazioni personali, non raccogliamo, utilizziamo né condividiamo dati personali. Il gioco non richiede una connessione a Internet per giocare, e non accediamo ai tuoi dati privati. Non vi sono richieste di permessi per accedere alle tue informazioni personali, né vengono raccolti dati in background. In sintesi, non raccogliamo o condividiamo alcuna informazione personale.",
            "adsHeader": "Annunci",
            "adsText": "Possiamo mostrare annunci nel gioco tramite Google Ads o Unity Ads. Questi annunci vengono visualizzati per supportare lo sviluppo del gioco. Google o Unity possono raccogliere e utilizzare le tue informazioni in base alle loro rispettive politiche sulla privacy. Tuttavia, non raccogliamo né abbiamo accesso a informazioni personali tramite gli annunci. Gli annunci sono mostrati in modo non invadente e supportano il modello gratuito del gioco.",
            "securityHeader": "Sicurezza dei dati",
            "securityText": "Poiché non memorizziamo alcuna informazione personale, non ci sono preoccupazioni relative alla sicurezza dei dati degli utenti in questo gioco. Tuttavia, ci assicuriamo che tutte le funzionalità del gioco e gli annunci rispettino le migliori pratiche del settore e non mettano a rischio la tua privacy. Abbiamo adottato misure di sicurezza per proteggere contro accessi non autorizzati o modifiche dei dati degli utenti.",
            "changesHeader": "Modifiche all'Informativa sulla privacy",
            "changesText": "Possiamo aggiornare questa Informativa sulla privacy di tanto in tanto. Eventuali modifiche saranno riflesse in questo documento. Ti consigliamo di consultare regolarmente questa politica per rimanere aggiornato su come proteggiamo la tua privacy. Se verranno apportate modifiche significative, informeremo gli utenti con una notifica all'interno dell'app o sulla pagina dell'informativa sulla privacy.",
            "contactHeader": "Contattaci",
            "contactText": "Se hai domande su questa Informativa sulla privacy o desideri contattarci in merito alla privacy, puoi raggiungerci all'indirizzo: "
        },
                "pt": {
            "introHeader": "Introdução",
            "introText": "Obrigado por escolher nosso <strong>Queen's Rush</strong>. Esta Política de Privacidade explica como tratamos suas informações ao usar nosso jogo. Sua privacidade é importante para nós, e garantimos que não coletamos nem compartilhamos informações pessoais. Operamos com altos padrões de segurança para garantir que sua experiência de jogo seja segura e agradável.",
            "infoHeader": "Informações que Coletamos",
            "infoText": "Como o jogo é totalmente offline e não coleta ou armazena informações pessoais, não coletamos, usamos ou compartilhamos dados pessoais. O jogo não requer conexão com a Internet para jogar e não solicita permissões para acessar dados do dispositivo. Ele não coleta informações pessoais como nome, endereço de e-mail ou outros dados identificáveis. Em resumo, sua privacidade está protegida ao jogar este jogo.",
            "adsHeader": "Anúncios",
            "adsText": "Podemos exibir anúncios no jogo por meio do Google Ads ou Unity Ads. Esses anúncios são exibidos para apoiar o desenvolvimento do jogo. O Google ou a Unity podem coletar e usar suas informações com base em suas respectivas políticas de privacidade. No entanto, não coletamos ou temos acesso a informações pessoais por meio de anúncios. Esses anúncios são exibidos de forma não invasiva e ajudam a financiar a continuidade do desenvolvimento do jogo.",
            "securityHeader": "Segurança de Dados",
            "securityText": "Como não armazenamos informações pessoais, não há preocupações com a segurança dos dados dos usuários neste jogo. No entanto, garantimos que todos os recursos do jogo e anúncios sigam as melhores práticas do setor e não comprometam sua privacidade. Implementamos medidas de segurança para prevenir acessos não autorizados ou alteração indevida de dados durante o uso do aplicativo.",
            "changesHeader": "Mudanças na Política de Privacidade",
            "changesText": "Podemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer mudanças serão refletidas neste documento. Recomendamos consultar esta política regularmente para ficar informado sobre como protegemos sua privacidade. Caso mudanças significativas sejam feitas, notificaremos os usuários diretamente dentro do aplicativo ou via alertas.",
            "contactHeader": "Fale Conosco",
            "contactText": "Se tiver alguma dúvida sobre esta Política de Privacidade ou desejar nos contatar sobre questões de privacidade, entre em contato conosco em: "
        },
                "ru": {
            "introHeader": "Введение",
            "introText": "Спасибо за выбор нашей игры <strong>Queen's Rush</strong>. Эта Политика конфиденциальности объясняет, как мы обрабатываем вашу информацию при использовании нашей игры. Ваша конфиденциальность важна для нас, и мы гарантируем, что не собираем и не передаем личную информацию. Мы придерживаемся строгих стандартов безопасности для обеспечения безопасного и приятного игрового процесса.",
            "infoHeader": "Информация, которую мы собираем",
            "infoText": "Поскольку игра полностью оффлайн и не собирает и не хранит личную информацию, мы не собираем, не используем и не передаем личные данные. Игра не требует подключения к Интернету для игры, и не запрашивает разрешений на доступ к данным устройства. Она не собирает такие персональные данные, как имя, адрес электронной почты или другие идентифицируемые данные. В общем, ваша конфиденциальность защищена во время игры.",
            "adsHeader": "Реклама",
            "adsText": "Мы можем показывать рекламу в игре через Google Ads или Unity Ads. Эта реклама отображается для поддержки разработки игры. Google или Unity могут собирать и использовать вашу информацию в соответствии с их соответствующими политиками конфиденциальности. Однако мы не собираем и не имеем доступа к личной информации через рекламу. Эта реклама отображается ненавязчиво и помогает финансировать дальнейшую разработку игры.",
            "securityHeader": "Защита данных",
            "securityText": "Так как мы не храним личную информацию, нет проблем с безопасностью данных пользователей в этой игре. Тем не менее, мы уверены, что все функции игры и реклама соответствуют лучшим практикам отрасли и не нарушают вашу конфиденциальность. Мы принимаем меры для предотвращения несанкционированного доступа или изменений данных при использовании приложения.",
            "changesHeader": "Изменения в Политике конфиденциальности",
            "changesText": "Мы можем время от времени обновлять эту Политику конфиденциальности. Все изменения будут отражены в этом документе. Мы рекомендуем регулярно проверять эту политику, чтобы быть в курсе того, как мы защищаем вашу конфиденциальность. Если будут внесены значительные изменения, мы уведомим пользователей прямо внутри приложения или через оповещения.",
            "contactHeader": "Свяжитесь с нами",
            "contactText": "Если у вас есть вопросы по этой Политике конфиденциальности или вы хотите связаться с нами по вопросам конфиденциальности, обращайтесь по следующему адресу: "
        },
                "ja": {
            "introHeader": "はじめに",
            "introText": "私たちのゲーム <strong>Queen's Rush</strong> を選んでいただきありがとうございます。このプライバシーポリシーでは、ゲームを使用する際に私たちがあなたの情報をどのように取り扱うかについて説明します。私たちの最優先事項はあなたのプライバシーです。",
            "infoHeader": "収集する情報",
            "infoText": "このゲームは完全にオフラインで、個人情報を収集または保存しないため、個人データを収集、使用、または共有することはありません。ゲームはインターネット接続なしでプレイでき、デバイスの情報にもアクセスしません。",
            "adsHeader": "広告",
            "adsText": "ゲーム内でGoogle AdsやUnity Adsを通じて広告が表示されることがあります。これらの広告はゲームの開発を支援するために表示されます。GoogleやUnityはそれぞれのプライバシーポリシーに基づいて情報を収集および使用する可能性があります。しかし、広告を通じて個人情報を収集したりアクセスしたりすることはありません。この広告の表示はゲームを無料で提供するために必要です。",
            "securityHeader": "データセキュリティ",
            "securityText": "私たちは個人情報を保存していないため、このゲームにおいてユーザーデータのセキュリティに関する懸念はありません。ただし、ゲームのすべての機能や広告が業界のベストプラクティスに従っており、あなたのプライバシーを脅かさないことを確認しています。",
            "changesHeader": "プライバシーポリシーの変更",
            "changesText": "このプライバシーポリシーは、時折更新されることがあります。変更内容はこの文書に反映されます。プライバシー保護の方法について最新情報を得るために、このポリシーを定期的に確認することをお勧めします。",
            "contactHeader": "お問い合わせ",
            "contactText": "このプライバシーポリシーに関するご質問がある場合や、プライバシー関連の問題でお問い合わせいただきたい場合は、以下の方法でご連絡ください： "
        },
        "zh": {
            "introHeader": "介绍",
            "introText": "感谢您选择我们的 <strong>Queen's Rush</strong>。本隐私政策解释了您在使用我们的游戏时我们如何处理您的信息。您的隐私对我们很重要，我们确保不会收集或分享任何个人数据。我们遵循严格的标准，以确保您的游戏体验安全且愉快。",
            "infoHeader": "我们收集的信息",
            "infoText": "由于游戏完全离线且不收集或存储任何个人信息，我们不会收集、使用或分享任何个人数据。游戏不需要互联网连接即可玩。因此，不会从玩家那里收集任何个人身份信息。",
            "adsHeader": "广告",
            "adsText": "我们可能通过Google Ads或Unity Ads在游戏中展示广告。这些广告是为了支持游戏开发而展示的。Google或Unity可能会根据各自的隐私政策收集和使用您的信息。然而，我们不会通过广告收集或访问任何个人信息。",
            "securityHeader": "数据安全",
            "securityText": "由于我们不存储任何个人信息，因此在此游戏中不存在与用户数据相关的数据安全问题。然而，我们确保所有游戏功能和广告都遵循行业最佳实践，不会危及您的隐私。",
            "changesHeader": "隐私政策的变更",
            "changesText": "我们可能会不时更新本隐私政策。任何更改将反映在此文档中。我们建议定期查看此政策，以了解我们如何保护您的隐私。本隐私政策的最新版本将始终在此页面上提供。",
            "contactHeader": "联系我们",
            "contactText": "如果您对本隐私政策有任何疑问或希望就隐私问题与我们联系，请通过以下方式联系我们："
        },
        "ko": {
            "introHeader": "소개",
            "introText": "저희 <strong>Queen's Rush</strong>를 선택해 주셔서 감사합니다. 이 개인정보 보호정책은 게임을 사용할 때 귀하의 정보를 처리하는 방법을 설명합니다. 귀하의 개인정보는 저희에게 중요하며, 어떠한 개인 데이터도 수집하거나 공유하지 않음을 보장합니다. 저희는 엄격한 기준을 준수하여 귀하의 게임 경험이 안전하고 즐거운 것이 되도록 합니다.",
            "infoHeader": "수집하는 정보",
            "infoText": "게임은 완전히 오프라인 상태로 개인 정보를 수집하거나 저장하지 않으므로, 개인 데이터를 수집, 사용 또는 공유하지 않습니다. 게임을 플레이하기 위해 인터넷 연결이 필요하지 않습니다. 따라서 플레이어로부터 개인 식별 정보를 수집하지 않습니다.",
            "adsHeader": "광고",
            "adsText": "Google Ads 또는 Unity Ads를 통해 게임 내에서 광고를 제공할 수 있습니다. 이러한 광고는 게임 개발을 지원하기 위해 표시됩니다. Google 또는 Unity는 각자의 개인정보 보호정책에 따라 귀하의 정보를 수집하고 사용할 수 있습니다. 그러나 저희는 광고를 통해 개인 정보를 수집하거나 접근하지 않습니다.",
            "securityHeader": "데이터 보안",
            "securityText": "저희는 개인 정보를 저장하지 않으므로, 이 게임에서 사용자 데이터와 관련된 데이터 보안 문제는 없습니다. 그러나 저희는 모든 게임 기능과 광고가 업계 최고의 관행을 따르며 귀하의 개인정보를 침해하지 않도록 보장합니다.",
            "changesHeader": "개인정보 보호정책 변경",
            "changesText": "저희는 때때로 이 개인정보 보호정책을 업데이트할 수 있습니다. 모든 변경 사항은 이 문서에 반영됩니다. 저희가 귀하의 개인정보를 보호하는 방법에 대해 최신 정보를 얻기 위해 이 정책을 정기적으로 확인할 것을 권장합니다. 이 개인정보 보호정책의 최신 버전은 항상 이 페이지에서 확인할 수 있습니다.",
            "contactHeader": "문의하기",
            "contactText": "이 개인정보 보호정책에 대해 질문이 있거나 개인정보 문제에 대해 저희에게 연락하고 싶으시면 다음 주소로 연락해 주십시오: "
        }
    }

    // Set the texts for the selected language
    document.getElementById("introHeader").innerHTML = translations[language].introHeader;
    document.getElementById("introText").innerHTML = translations[language].introText;
    document.getElementById("infoHeader").innerHTML = translations[language].infoHeader;
    document.getElementById("infoText").innerHTML = translations[language].infoText;
    document.getElementById("adsHeader").innerHTML = translations[language].adsHeader;
    document.getElementById("adsText").innerHTML = translations[language].adsText;
    document.getElementById("securityHeader").innerHTML = translations[language].securityHeader;
    document.getElementById("securityText").innerHTML = translations[language].securityText;
    document.getElementById("changesHeader").innerHTML = translations[language].changesHeader;
    document.getElementById("changesText").innerHTML = translations[language].changesText;
    document.getElementById("contactHeader").innerHTML = translations[language].contactHeader;
    document.getElementById("contactText").innerHTML = translations[language].contactText;

    // Close the modal
    document.getElementById("languageModal").style.display = "none";
}