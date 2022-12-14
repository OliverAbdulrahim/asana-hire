package org.conservationco.asanahire.domain.mail.template

import org.conservationco.asanahire.domain.mail.Address

class TemplatedJobMessage(
    template: Template,
    sender: Address,
    recipient: Address,
    subject: String,
    val jobTitle: String
): TemplatedMessage(template, sender, recipient, subject)
