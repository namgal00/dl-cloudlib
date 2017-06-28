[#if message_prompt?exists]
[#if (message_prompt.type == 'SUCCESS') ]
<div class="alert alert-success" id="message_prompt">
    <strong>Well done!</strong>
    ${message_prompt.content}
</div>
[#elseif (message_prompt.type == 'ERROR')]
<div class="alert alert-danger" id="message_prompt">
    <strong>Oh snap!</strong>
    ${message_prompt.content}
</div>
[#else]
<div class="alert alert-danger" id="message_prompt">
    <strong>Warning!</strong>
    ${message_prompt.content}
</div>
[/#if]
[/#if]
