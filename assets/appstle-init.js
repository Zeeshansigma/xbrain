(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0731/9506/1561/t/1/assets/appstle-subscription.js?v=1690903991");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent .customer.account > div:nth-child(2) > div:nth-child(2) > h2",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "true",
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "x-brain-supplement.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Purchase Options",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscribe and save 15%",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription detail",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Skip, reschedule, edit, or cancel deliveries anytime, based on your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly","discountOffer":15.0,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/688486678841","frequencyType":"ON_PURCHASE_DAY","specificDayEnabled":false,"cutOff":0,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/688486678841","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","groupName":"Monthly","appstleCycles":[]}],
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": true,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{totalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 163,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": true,
        "appstlePlanName": "BUSINESS",
        "appstlePlanFeatures": {
	"subscriptionOrderAmount": 30000.0,
	"analytics": true,
	"enableSubscriptionManagement": true,
	"enableDunningManagement": true,
	"enableCustomerPortalSettings": true,
	"enableShippingProfiles": true,
	"enableProductSwapAutomation": true,
	"enableAdvancedSellingPlans": true,
	"enableSummaryReports": true,
	"enableCustomEmailDomain": true,
	"enableWidgetPlacement": true,
	"enableIntegrations": true,
	"enableSmsAlert": false,
	"enableCustomEmailHtml": true,
	"enableCancellationManagement": true,
	"enableBundling": true,
	"enableAutomation": true,
	"enableQuickActions": false,
	"enableExternalApi": false,
	"enableCartWidget": true,
	"enableAutoSync": true,
	"webhookAccess": false,
	"accessWidgetDesignOptions": true,
	"accessSubscriptionActivityLogs": true,
	"accessBuildABox": true,
	"accessResendEmail": true,
	"accessKlaviyoContactSync": true,
	"accessOneTimeProductUpsells": true,
	"accessAdvanceSubscriptionPlanOptions": true,
	"accessSplitContract": true,
	"accessDiscountOnCancellationAttempt": true,
	"accessQuickCheckout": false,
	"accessSubscriberLoyaltyFeatures": true,
	"accessBundling": true,
	"accessManualSubscriptionCreation": true,
	"accessAppstleMenu": false
},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "false",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "true",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetType": "WIDGET_TYPE_1",
        "widgetTemplateHtml": `{% raw %}{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Years\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.weeklyLabelTextV2\":\"Weekly\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"One Time\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"false\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"Months\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe & save\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.monthlyLabelTextV2\":\"Monthly\",\"appstle.subscription.wg.prepayLabelTextV2\":\"Prepay\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"Month\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\",\"appstle.subscription.wg.yearlyLabelTextV2\":\"Yearly\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_subscription_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "elementCSS": "[]",
            "customerPortalCss": ".as-cp-wrapper {\n  background-color: rgb(243 244 246);\n}\n\n.as-table-head {\n  background-color: transparent;\n}\n\n.as-edit-billing,\n.as-edit-frequency {\n  display: none;\n}\n.as-additional-order-details {\n  margin-top: -16px;\n}\n\n.as-product-image-wrapper {\n  grid-column: span 4\/span 4;\n}\n.as-product-line-details {\n  grid-column: span 8\/span 8;\n}",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

